import React, { useState } from "react";
import Modal from "react-modal";
import routines from "../data/routines";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

Modal.setAppElement("#root"); // Required for accessibility

function Routine() {
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (name) => {
    setSelectedPersonality(name);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPersonality(null);
  };

  return (
    <div className="routine-container">
      <h1 className="routine-title">Weekly Routine</h1>

      <div className="routine-grid">
        {Object.entries(routines).map(([name, data]) => (
          <div
            key={name}
            className="routine-card"
            data-aos="fade-up"
            onClick={() => openModal(name)}
          >
            <img src={data.image} alt={name} className="routine-image" />
            <p className="routine-person-name">{name}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Routine Modal"
        className="routine-modal"
        overlayClassName="modal-overlay"
      >
        {selectedPersonality && (
          <div className="routine-details" data-aos="zoom-in">
            <div className="routine_top">
              <h2>
                {selectedPersonality}'s Routine ({selectedDay})
              </h2>
              <button onClick={closeModal} className="close-btn">
                ❌
              </button>
            </div>
            <div className="day-selector">
              {Object.keys(routines[selectedPersonality].week).map((day) => (
                <button
                  key={day}
                  className={`day-btn ${
                    day === selectedDay ? "active-day" : ""
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="routine-section">
              <h3>Morning</h3>
              {Object.entries(
                routines[selectedPersonality].week[selectedDay].morning
              ).map(([time, activity]) => (
                <p key={time}>
                  <strong>{time}:</strong> {activity}
                </p>
              ))}
            </div>

            <div className="routine-section">
              <h3>Afternoon</h3>
              {Object.entries(
                routines[selectedPersonality].week[selectedDay].afternoon
              ).map(([time, activity]) => (
                <p key={time}>
                  <strong> {time}:</strong> {activity}
                </p>
              ))}
            </div>
            <div className="routine-section">
              <h3> Night</h3>
              {Object.entries(
                routines[selectedPersonality].week[selectedDay].evening
              ).map(([time, activity]) => (
                <p key={time}>
                  <strong>{time}:</strong> {activity}
                </p>
              ))} 
              {Object.entries(
                routines[selectedPersonality].week[selectedDay].night
              ).map(([time, activity]) => (
                <p key={time}>
                  <strong> {time}:</strong> {activity}
                </p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Routine;
