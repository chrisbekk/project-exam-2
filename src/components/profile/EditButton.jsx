import { MdOutlineEdit } from 'react-icons/md';

export default function EditButton({ setToggleEditProfile }) {
  const handleClick = () => {
    setToggleEditProfile(true);
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 rounded-xl bg-white bg-opacity-65 p-1 sm:p-2"
    >
      <div className="hidden rounded-full bg-white p-1 xs:block">
        <MdOutlineEdit />
      </div>

      <p className="text-sm font-medium">Edit Profile</p>
    </button>
  );
}
