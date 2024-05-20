import default_banner from '/default_banner.webp';
import ProfileImage from './ProfileImage';
import EditButton from './EditButton';
export default function Banner({ banner, avatar, username }) {
  let { url, alt } = banner || {};
  const FALLBACK_BANNER = default_banner;
  let profileUsername =
    typeof username === 'string' && username.length !== 0 ? username : '';

  if (typeof url !== 'string' && url.length === 0) {
    url = FALLBACK_BANNER;
    alt =
      'A banner in the pink colors of the Holidaze brand with Holidaze written on it.';
  }
  return (
    <div className="relative w-full rounded-xl md:h-[250px]">
      <img
        src={url}
        alt={alt}
        className="h-full w-full rounded-xl object-cover"
      />
      <div className="absolute bottom-4 left-3 flex items-center gap-4">
        <ProfileImage avatar={avatar} username={username} />
        <p className="font-semibold">{profileUsername}</p>
      </div>
      <div className="absolute bottom-4 right-3">
        <EditButton />
      </div>
    </div>
  );
}
