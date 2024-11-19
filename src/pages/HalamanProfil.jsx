import React, { useState } from "react";
import "./HalamanProfil.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, addDoc } from "firebase/firestore"; // Tambahan
import { db } from "../firebase";

const HalamanProfil = () => {
  // Menyimpan state untuk form input
  const [formData, setFormData] = useState({
    fullName: "",
    nickName: "",
    gender: "",
    country: "",
    email: "",
    interests: "",
  });

  // Fungsi untuk menangani perubahan pada input form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk mengirim data ke Firestore
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Menyimpan data ke koleksi "profiles"
      await addDoc(collection(db, "profiles"), formData);
      alert("Data saved successfully!");
    } catch (error) {
      alert("Error saving data");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container13 fade-in">
        <div className="profile-container">
          <div className="profile-header">
            <img
              src="pro.png"
              alt="User Profile"
              className="profile-picture"
            />
            <div className="profile-info">
              <h2>Alexa Rawles</h2>
              <p>alexarawles@gmail.com</p>
            </div>
            <button type="button" className="edit-button" onClick={handleSubmit}>
              Save
            </button>
          </div>

          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group form-group-fullname">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group form-group-nickname">
              <label>Nick Name</label>
              <input
                type="text"
                placeholder="Your Nick Name"
                name="nickName"
                value={formData.nickName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group form-group-gender">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group form-group-country">
              <label>Country</label>
              <input
                type="text"
                placeholder="Your Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="form-group form-group-email">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Your Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group form-group-interests">
              <label>Interests</label>
              <div className="interests-container">
                <div className="interests">
                  <div className="interest-item">Fashion & Style</div>
                  <div className="interest-item">
                    Entertainment & Pop Culture
                  </div>
                  <div className="interest-item">
                    Entrepreneurship & Business
                  </div>
                  <div className="interest-item">Travel & Adventure</div>
                  <div className="interest-item">
                    Sustainability & Eco Living
                  </div>
                  <div className="interest-item">Tech & Innovation</div>
                </div>
                <input
                  type="text"
                  className="interest-input"
                  placeholder="What else are you interested in?"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HalamanProfil;
