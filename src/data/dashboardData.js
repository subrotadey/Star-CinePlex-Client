import { showData } from './dateTimeData';

export const bookingData = [
    {
        "totalBookings": 150,
        "totalRevenue": 4500.00,
        "totalUser": 5,
        "activeShows": [
            {
                "showId": "1234567890",
                "movieTitle": "Inception",
                "movie": showData[0],
                "showDateTime": "2023-10-01T14:00:00Z",
                "occupiedSeats": [
                    {
                        "A1": "user_123",
                        "B1": "user_456",
                        "C1": "user_789"
                    },
                ],
                "availableSeats": 50,
                "bookedSeats": 30,
                "pricePerSeat": 10.00
            },
            {
                "showId": "0987654321",
                "movieTitle": "The Matrix",
                "theaterName": "Cineplex 2",
                "showTime": "2023-10-01T16:00:00Z",
                "availableSeats": 40,
                "bookedSeats": 20,
                "pricePerSeat": 12.00
            }
        ],
        "id": "67464341656323",
        "user": {
            "name": "John Doe",
            "email": ""
        },

        "show": {
            _id: "1234567890",
            movieData: {
                title: "Inception",
                poster: "https://image.tmdb.org/t/p/w500/8c3z0d1k2b4f5e6g7h8i9j0k1l2m3n4o5.jpg",
                genre: "Science Fiction",
            }
        },
        "theater": {
            "name": "Cineplex 1",
            "location": "Downtown"
        },
        "seats": [
            { "row": "A", "number": 1 },
            { "row": "A", "number": 2 },
            { "row": "B", "number": 1 }
        ],
        "bookingDate": "2023-10-01T12:00:00Z",
        "bookingTime": "2023-10-01T14:00:00Z",
        "totalPrice": 30.00,
        "status": "confirmed",
        "paymentMethod": "credit_card",
        "transactionId": "TX123456789",
        "createdAt": "2023-10-01T11:00:00Z",
        "updatedAt": "2023-10-01T11:30:00Z"
    }

]