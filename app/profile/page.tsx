"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs, deleteDoc, addDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [clientData, setClientData] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false); // État pour le spinner
  const [clientResponse, setClientResponse] = useState(""); // Réponse du client
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null); // Réservation sélectionnée pour la réponse

  // Predefined options
  const services = ["Haircut", "Beard Trim", "Shaving", "Hair Coloring", "Styling"];
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = ["06:00", "07:00", "08:00", "09:00", "10:00", "17:00", "18:00", "19:00"];

  // Convert time to 12-hour format (AM/PM)
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour, 10);
    const period = hourNum >= 12 ? "PM" : "AM";
    const formattedHour = hourNum % 12 || 12; // Convert 0 to 12 for midnight
    return `${formattedHour}:${minute} ${period}`;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (client) => {
      if (client) {
        console.log("✅ Client logged in:", client.uid);

        // Fetch client data
        const clientDocRef = doc(db, "clients", client.uid);
        const clientDocSnap = await getDoc(clientDocRef);

        if (clientDocSnap.exists()) {
          setClientData({ id: client.uid, ...clientDocSnap.data() });

          // Fetch client bookings
          const bookingsQuery = query(collection(db, "bookings"), where("clientId", "==", client.uid));
          const bookingsSnapshot = await getDocs(bookingsQuery);

          if (!bookingsSnapshot.empty) {
            const clientBookings = bookingsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("Client bookings:", clientBookings);
            setBookings(clientBookings);
          } else {
            console.log("No bookings found for this client.");
          }
        } else {
          console.log("No client document found.");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Delete a booking
  const deleteBooking = async (id: string) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((booking) => booking.id !== id));
      console.log("✅ Booking deleted:", id);
    } catch (error) {
      console.error("❌ Error deleting booking:", error);
    }
  };

  // Add a booking
  const createBooking = async (service: string, selectedDay: string, selectedTime: string) => {
    if (!clientData) {
      console.error("⚠️ No client logged in!");
      return;
    }

    setIsBooking(true); // Activer le spinner

    try {
      await addDoc(collection(db, "bookings"), {
        clientId: clientData.id, // 🔥 Automatically add clientId
        name: clientData.name,
        email: clientData.email,
        phone: clientData.phone,
        service,
        selectedDay,
        selectedTime,
        createdAt: new Date(), // 📅 Timestamp
        barberResponse: "", // Réponse du barber (vide par défaut)
        barberName: "", // Nom du barber (vide par défaut)
        barberPhone: "", // Téléphone du barber (vide par défaut)
        respondedAt: null, // Date de réponse (vide par défaut)
        clientResponse: "", // Réponse du client (vide par défaut)
        clientRespondedAt: null, // Date de réponse du client (vide par défaut)
      });
      console.log("✅ Booking added!");

      // Reload bookings after adding
      const bookingsQuery = query(collection(db, "bookings"), where("clientId", "==", clientData.id));
      const bookingsSnapshot = await getDocs(bookingsQuery);
      const clientBookings = bookingsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(clientBookings);
    } catch (error) {
      console.error("❌ Error adding booking:", error);
    } finally {
      setIsBooking(false); // Désactiver le spinner
    }
  };

  // Répondre à la réponse du barber
  const respondToBarber = async (bookingId: string) => {
    if (!clientResponse) {
      console.error("⚠️ Please enter a response.");
      return;
    }

    try {
      const bookingRef = doc(db, "bookings", bookingId);
      await updateDoc(bookingRef, {
        clientResponse,
        clientRespondedAt: new Date(), // Ajouter un timestamp pour la réponse du client
      });
      console.log("✅ Client response sent!");

      // Mettre à jour la liste des réservations
      const updatedBookings = bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, clientResponse, clientRespondedAt: new Date() } : booking
      );
      setBookings(updatedBookings);
      setClientResponse(""); // Réinitialiser le champ de réponse
      setSelectedBookingId(null); // Fermer la section de réponse
    } catch (error) {
      console.error("❌ Error responding to barber:", error);
    }
  };

  // Spinner de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!clientData) return <p>You must be logged in.</p>;

  return (
    <div className="min-h-screen bg-gray-50 pt-[11rem] pb-[5rem] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Hello, {clientData?.name}!</h1>
          <p className="mt-2 text-lg text-gray-600">Welcome to your personal space.</p>
        </div>

        {/* Two-column layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Booking form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Book a Service</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement); // Caster e.target en HTMLFormElement
                const service = formData.get("service");
                const selectedDay = formData.get("selectedDay");
                const selectedTime = formData.get("selectedTime");
                if (service && selectedDay && selectedTime) {
                  createBooking(service.toString(), selectedDay.toString(), selectedTime.toString());
                }
              }}
              className="space-y-6"
            >
              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                <select
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700"
                  required
                >
                  <option value="" className="text-gray-400">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-700">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Day</label>
                <select
                  name="selectedDay"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700"
                  required
                >
                  <option value="" className="text-gray-400">Select a day</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day} className="text-gray-700">
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <select
                  name="selectedTime"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-700"
                  required
                >
                  <option value="" className="text-gray-400">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="text-gray-700">
                      {formatTime(time)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isBooking} 
                className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-200 flex items-center justify-center"
              >
                {isBooking ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  "Book Now"
                )}
              </button>
            </form>
          </div>

          {/* Right column: Booking list */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">📅 My Bookings</h2>
            {bookings.length === 0 ? (
              <p className="text-gray-600">No bookings found.</p>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-lg font-medium text-gray-800">{booking.service}</p>
                    <p className="text-gray-600">
                      {booking.selectedDay} at {formatTime(booking.selectedTime)}
                    </p>
                    {booking.barberResponse && (
                      <div className="mt-4">
                        <p className="text-green-600">
                          <strong>Barber's response:</strong> {booking.barberResponse}
                        </p>
                        <p className="text-gray-600">
                          <strong>Barber:</strong> {booking.barberName} ({booking.barberPhone})
                        </p>
                      </div>
                    )}
                    {booking.clientResponse && (
                      <div className="mt-4">
                        <p className="text-blue-600">
                          <strong>Your response:</strong> {booking.clientResponse}
                        </p>
                      </div>
                    )}
                    {booking.barberResponse && !booking.clientResponse && (
                      <div className="mt-4">
                        <textarea
                          value={clientResponse}
                          onChange={(e) => setClientResponse(e.target.value)}
                          placeholder="Type your response here..."
                          className="text-black w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                          rows={3}
                        />
                        <button
                          onClick={() => respondToBarber(booking.id)}
                          className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-200"
                        >
                          Send Response
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/+237673916778" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M12 2a10 10 0 0 1 8.17 15.76l-1.45 4.26a1 1 0 0 1-1.27.65l-4.26-1.45A10 10 0 1 1 12 2zm0 2a8 8 0 0 0-6.93 12l.23.68-1.45 4.26 4.26-1.45.68.23A8 8 0 1 0 12 4zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-3-8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
            </svg>
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;