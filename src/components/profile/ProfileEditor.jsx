import { useState } from 'react';
import { Button } from '../generics/Button';
import { Pending } from '../generics/Pending';
import { Error } from '../generics/Error';
import { updateProfile } from '../../api/updateProfile';
import { useUserContext } from '../../context/userContext';
import { useUpdateUser } from '../../hooks/useUpdateUser';
import { useNavigate } from 'react-router-dom';
export default function ProfileEditor({
  bio,
  banner,
  avatar,
  name,
  setToggleEditProfile,
  setUserData,
}) {
  const [formData, setFormData] = useState({
    bio: bio || '',
    avatar: { url: avatar.url || '', alt: avatar.alt || '' },
    banner: { url: banner.url || '', alt: banner.alt || '' },
  });
  const navigate = useNavigate();
  const { user, apiKey, accessToken } = useUserContext();
  const { responseData, pending, responseError, updateUser } = useUpdateUser();
  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prevFormData => {
      const keys = name.split('.');
      if (keys.length > 1) {
        const [firstKey, secondKey] = keys;
        return {
          ...prevFormData,
          [firstKey]: {
            ...prevFormData[firstKey],
            [secondKey]: value,
          },
        };
      }
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(user.name, accessToken, apiKey, formData).then(res => {
      setUserData(prev => ({
        ...prev,
        bio: res.bio,
        avatar: {
          ...prev.avatar,
          url: res.avatar.url,
        },
        banner: {
          ...prev.banner,
          url: res.banner.url,
        },
      }));
      setToggleEditProfile(false);
      navigate('/auth/profile');
    });
  };
  if (pending) return <Pending text={'Updating Profile...'} />;
  if (responseError)
    return (
      <Error
        text={'Failed to update Profile'}
        path={'/auth/profile'}
        redirectTo={'Back to Profile Page'}
      />
    );

  return (
    <div className="relative mx-3 my-3 sm:m-4 md:m-10">
      <h1 className="text-lg font-medium underline">Edit Your Profile</h1>
      <div className="relative mt-2 h-[200px] w-full rounded-2xl">
        <img
          src={formData.banner.url}
          alt={formData.banner.alt}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="absolute bottom-4 left-3 flex size-16 items-end gap-2 rounded-full md:size-20">
          <img
            src={formData.avatar.url}
            alt={formData.avatar.alt}
            className="h-full w-full rounded-full object-cover"
          />
          <p className="mb-2 font-medium">{name}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3 rounded-xl border border-neutral-400 bg-white p-1">
          <label
            htmlFor="bannerURL"
            className="text-sm font-medium sm:text-base md:text-lg"
          >
            Profile Banner
          </label>
          <input
            type="text"
            id="bannerURL"
            name="banner.url"
            value={formData.banner.url}
            onChange={handleChange}
            className="w-full text-sm focus:outline-none sm:text-base"
          />
        </div>
        <div className="mb-3 rounded-xl border border-neutral-400 bg-white p-1">
          <label
            htmlFor="avatarURl"
            className="text-sm font-medium sm:text-base md:text-lg"
          >
            Profile Avatar
          </label>
          <input
            type="text"
            id="avatarURl"
            name="avatar.url"
            value={formData.avatar.url}
            onChange={handleChange}
            className="w-full text-sm focus:outline-none sm:text-base"
          />
        </div>
        <div className="mb-3 rounded-xl border border-neutral-400 bg-white p-1">
          <label
            htmlFor="bio"
            className="text-sm font-medium sm:text-base md:text-lg"
          >
            Profile Bio
          </label>
          <textarea
            id="bio"
            className="h-12 w-full resize-none text-sm focus:outline-none sm:text-base"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-full justify-center gap-4">
          <Button small={true} submit={true} fill={true}>
            Confirm
          </Button>
          <button
            onClick={() => setToggleEditProfile(false)}
            className="w-auto rounded-xl border border-neutral-500 px-4 py-4"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
