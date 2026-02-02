import { useState } from "react";

export default function Payment({ cart }) {

  const [showUPI, setShowUPI] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  const handlePayment = () => {
    setTimeout(() => {
      setSuccess(true);
    }, 1000); // fake delay like real payment
  };

  return (
    <div className="p-10 text-center">

      <h2 className="text-3xl font-bold mb-4">Payment Page 💳</h2>

      {cart.length === 0 && !success && (
        <p>No items to pay for</p>
      )}

      {!success && cart.length > 0 && (
        <>
          <div className="mb-4">
            {cart.map((item, i) => (
              <p key={i}>
                {item.name} - ₹{item.price}
              </p>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4">
            Total Amount: ₹{total}
          </h3>

          {!showUPI ? (
            <button
              onClick={() => setShowUPI(true)}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Pay Now
            </button>
          ) : (
            <div className="bg-gray-100 p-6 rounded inline-block">

              <h3 className="font-bold mb-3">Pay via UPI</h3>

              <input
                className="border p-2 w-full mb-3"
                placeholder="Enter UPI ID (example@upi)"
              />

              <button
                onClick={handlePayment}
                className="bg-green-600 text-white px-5 py-2 rounded w-full"
              >
                Confirm Payment
              </button>

            </div>
          )}
        </>
      )}

      {success && (
        <div className="bg-green-100 p-10 rounded">

          <h2 className="text-3xl font-bold text-green-700">
            ✅ Payment Successful!
          </h2>

          <p className="mt-2">
            Thank you for your order 🎉
          </p>

          <p className="mt-2 font-semibold">
            Amount Paid: ₹{total}
          </p>

        </div>
      )}

    </div>
  );
}
