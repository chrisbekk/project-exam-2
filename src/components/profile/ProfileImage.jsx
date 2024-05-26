export default function ProfileImage({ avatar, username }) {
  let defaultProfileImage;
  let profileImageElement;
  let flexContainer = false;
  if (typeof username === 'string' && username.length !== 0) {
    defaultProfileImage = username.charAt(0).toUpperCase();
  } else {
    defaultProfileImage = 'H';
  }

  if (typeof avatar?.url === 'string' && avatar?.url.length !== 0) {
    profileImageElement = (
      <img
        src={avatar?.url}
        alt={avatar?.alt}
        className="h-full w-full rounded-full object-cover"
      />
    );
  } else {
    profileImageElement = (
      <p className="text-2xl font-semibold text-neutral-600 md:text-5xl">
        {defaultProfileImage}
      </p>
    );
    flexContainer = true;
  }

  return (
    <div
      className={`${flexContainer ? 'flex items-center justify-center' : ''} size-12 rounded-full bg-neutral-100 shadow-xl xs:size-14 sm:size-16 md:size-24`}
    >
      {profileImageElement}
    </div>
  );
}
