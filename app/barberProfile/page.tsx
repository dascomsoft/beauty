"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const BarberProfile = () => {
  const [barberData, setBarberData] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<any>(null); // Pour gérer les réponses
  const [response, setResponse] = useState(""); 


const formatTime = (time: string | undefined) => {
    if (!time) {
      return ""; // Retourne une chaîne vide si time est undefined ou null
    }
  
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour, 10);
    const period = hourNum >= 12 ? "PM" : "AM";
    const formattedHour = hourNum % 12 || 12; // Convertir 0 en 12 pour minuit
    return `${formattedHour}:${minute} ${period}`;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("✅ Barber logged in:", user.uid);

        // Récupérer les données du barber
        const barberDocRef = doc(db, "barbers", user.uid);
        const barberDocSnap = await getDoc(barberDocRef);

        if (barberDocSnap.exists()) {
          setBarberData({ id: user.uid, ...barberDocSnap.data() });

          // Récupérer toutes les réservations des clients
          const bookingsQuery = query(collection(db, "bookings"));
          const bookingsSnapshot = await getDocs(bookingsQuery);

          if (!bookingsSnapshot.empty) {
            const allBookings = bookingsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("All bookings:", allBookings);
            setBookings(allBookings);
          } else {
            console.log("No bookings found.");
          }
        } else {
          console.log("No barber document found.");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Supprimer une réservation
  const deleteBooking = async (id: string) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((booking) => booking.id !== id));
      console.log("✅ Booking deleted:", id);
    } catch (error) {
      console.error("❌ Error deleting booking:", error);
    }
  };

  // Répondre à une réservation
  const respondToBooking = async (bookingId: string, response: string) => {
    if (!barberData) {
      console.error("⚠️ No barber logged in!");
      return;
    }

    try {
      const bookingRef = doc(db, "bookings", bookingId);
      await updateDoc(bookingRef, {
        barberResponse: response,
        barberName: barberData.name, // Ajouter le nom du barber
        barberPhone: barberData.phone, // Ajouter le téléphone du barber
        respondedAt: new Date(), // Ajouter un timestamp pour la réponse
      });
      console.log("✅ Response sent!");

      // Mettre à jour la liste des réservations
      const updatedBookings = bookings.map((booking) =>
        booking.id === bookingId
          ? {
              ...booking,
              barberResponse: response,
              barberName: barberData.name,
              barberPhone: barberData.phone,
            }
          : booking
      );
      setBookings(updatedBookings);
      setResponse(""); // Réinitialiser le champ de réponse
      setSelectedBooking(null); // Fermer la section de réponse
    } catch (error) {
      console.error("❌ Error responding to booking:", error);
    }
  };

  // Spinner de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (!barberData) return <p>You must be logged in as a barber.</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-[10rem] pb-[3rem]">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-pink-500">Hello, {barberData?.name}!</h1>
          <p className="mt-2 text-lg text-gray-600">Welcome to your barber dashboard.</p>
          <p className="mt-2 text-gray-600">
            Your contact info: {barberData.phone} | {barberData.email}
          </p>
        </div>

        {/* Liste des réservations */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">📅 Client Bookings</h2>
          {bookings.length === 0 ? (
            <p className="mt-4 text-gray-600">No bookings found.</p>
          ) : (
            <div className="mt-4 space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-gray-800">{booking.service}</p>
                  <p className="text-gray-600">
                    {booking.selectedDay} at {formatTime(booking.selectedTime)}
                  </p>
                  <p className="text-gray-600">
                    Client: {booking.name} | Phone: {booking.phone} | Email: {booking.email}
                  </p>
                  {booking.barberResponse && (
                    <p className="text-green-600 mt-2">
                      <strong>Your response:</strong> {booking.barberResponse}
                    </p>
                  )}
                  <div className="mt-2 space-x-2">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-200"
                    >
                      Respond
                    </button>
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section de réponse */}
        {selectedBooking && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Respond to {selectedBooking.name}
            </h3>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Type your response here..."
              className="text-black mt-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={4}
            />
            <div className="mt-4 space-x-2">
              <button
                onClick={() => respondToBooking(selectedBooking.id, response)}
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-200"
              >
                Send Response
              </button>
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarberProfile;



















             