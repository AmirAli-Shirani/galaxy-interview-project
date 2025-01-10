"use client";
import { useState } from "react";

const GuideModal = () => {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        showModal && (
            <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-60">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-8 w-96 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">به بازی خوش آمدید!</h2>
                    <p className="text-gray-100 mb-6 text-lg">
                        برای بازی کردن مراحل زیر را دنبال کنید:
                    </p>
                    <ol style={{direction : "rtl"}} className="list-decimal text-left pr-5 mb-6 text-gray-200">
                        <li>سیاره‌ها را به مدارهای صحیح خود بکشید.</li>
                        <li>سیاره‌ها را مطابق موقعیت‌های مشخص شده، مرتب کنید.</li>
                        <li>از بازی لذت ببرید و در مورد منظومه شمسی بیشتر بدانید!</li>
                    </ol>
                    <button
                        onClick={closeModal}
                        className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
                    >
                        فهمیدم!
                    </button>
                </div>
            </div>
        )
    );
};

export default GuideModal;
