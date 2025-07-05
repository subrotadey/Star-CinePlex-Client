import { showsData } from "./showsData"

export const bookingData = [
    {
        "_id": "67464341656323",
        "user": { "name": "John Doe", },
        "show": {
            _id: "1234567890",
            movie: showsData,
            showDateTime: "2023-10-01T14:00:00Z",
            showPrice: 180.00,
        },
        "amount": 480.00,
        "bookedSeats": ["D1", "D2", "D3"],
        "isPaid": true
    },
    {
        "_id": "67464341656324",
        "user": {
            "name": "Jane Smith",
        },
        "show": {
            _id: "0987654321",
            movie: showsData,
            showDateTime: "2023-10-01T16:00:00Z",
            showPrice: 200.00,
        },
        "amount": 600.00,
        "bookedSeats": ["E1", "E2", "E3"],
        "isPaid": true
    },
    {
        "_id": "67464341656325",
        "user": {
            "name": "Alice Johnson",
        },
        "show": {
            _id: "1234567890",
            movie: showsData,
            showDateTime: "2023-10-01T18:00:00Z",
            showPrice: 150.00,
        },
        "amount": 450.00,
        "bookedSeats": ["F1", "F2", "F3"],
        "isPaid": true
    },
    {
        "_id": "67464341656326",
        "user": {
            "name": "Bob Brown",
        },
        "show": {
            _id: "0987654321",
            movie: showsData,
            showDateTime: "2023-10-01T20:00:00Z",
            showPrice: 220.00,
        },
        "amount": 660.00,
        "bookedSeats": ["G1", "G2", "G3"],
        "isPaid": true
    }
]