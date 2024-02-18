import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { createProject } from '../services/blockchain';
import { useGlobalState, setGlobalState } from '../store';

const CreateProject = () => {
  const [createModal] = useGlobalState('createModal');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');
  const [imageURL, setImageURL] = useState('');

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr);
    return dateObj / 1000;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !cost || !date || !imageURL) return;

    try {
      const params = {
        title,
        description,
        cost,
        expiresAt: toTimestamp(date),
        imageURL,
      };

      await createProject(params);
      toast.success('Project created successfully.');
      onClose();
    } catch (error) {
      toast.error('Failed to create project.');
      console.log(error);
    }
  };

  const onClose = () => {
    setGlobalState('createModal', 'scale-0');
    reset();
  };

  const reset = () => {
    setTitle('');
    setCost('');
    setDescription('');
    setImageURL('');
    setDate('');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex
      items-center justify-center bg-black bg-opacity-50
      transform transition-transform duration-300 ${createModal}`}
    >
      <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Rest of the component code */}
          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-md leading-tight
            rounded-full shadow-md hover:bg-green-700 mt-5"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
