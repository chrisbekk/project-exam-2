import { MdOutlineEdit } from 'react-icons/md';

export default function EditButton() {
  return (
    <button className="flex items-center gap-2 rounded-xl bg-white bg-opacity-65 p-1 sm:p-2">
      <div className="hidden rounded-full bg-white p-1 xs:block">
        <MdOutlineEdit />
      </div>

      <p className="text-sm font-medium">Edit Profile</p>
    </button>
  );
}
