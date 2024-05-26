import default_banner from '/default_banner.webp';
import ProfileImage from './ProfileImage';
import EditButton from './EditButton';
export default function Banner({
  banner,
  avatar,
  username,
  setToggleEditProfile,
}) {
  // const FALLBACK_BANNER = default_banner;
  // let profileUsername =
  //   typeof username === 'string' && username.length !== 0 ? username : '';

  // if (typeof banner?.url !== 'string' && banner?.url.length === 0) {
  //   banner?.url = FALLBACK_BANNER;
  //   banner?.alt =
  //     'A banner in the pink colors of the Holidaze brand with Holidaze written on it.';
  // }
  return (
    <div className="relative h-[175px] w-full rounded-xl">
      <img
        src={banner?.url}
        alt={banner?.alt}
        className="h-full w-full rounded-xl object-cover"
      />
      <div className="absolute bottom-4 left-3 flex items-center gap-4">
        <ProfileImage avatar={avatar} username={username} />
        <p className="font-semibold">{username}</p>
      </div>
      <div className="absolute bottom-4 right-3">
        <EditButton setToggleEditProfile={setToggleEditProfile} />
      </div>
    </div>
  );
}
