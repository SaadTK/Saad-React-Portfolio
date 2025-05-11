// components/ProjectModal.jsx
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

Modal.setAppElement("#root");

const ProjectModal = ({ isOpen, onClose, images }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Project Screenshots"
      className="bg-white dark:bg-[#1e293b] p-1 md:p-6 rounded-lg shadow-xl max-w-3xl mx-auto h-[95vh] overflow-y-auto outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start"
    >
      <button
        onClick={onClose}
        className="text-red-500 mb-4 font-semibold text-right ml-auto block"
      >
        ✕ Close
      </button>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
      >
        {images.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`Screenshot ${i + 1}`} className="rounded" />
          </div>
        ))}
      </Carousel>
    </Modal>
  );
};

export default ProjectModal;
