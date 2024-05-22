import { MdErrorOutline } from 'react-icons/md';
import { Button } from '../Button';
export default function Error({ responseError }) {
  if (!responseError) return;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="max-w-[540px] rounded-xl border border-neutral-400 bg-neutral-50 p-3 sm:p-8">
        <div className="mb-6 flex items-center gap-2">
          <MdErrorOutline className="size-10" />
          <h1 className="font-semibold sm:text-lg">Profile Update Failed</h1>
        </div>
        <div>
          <p className="mb-2 text-sm md:text-base">
            Something went wrong while updating your profile.
          </p>
          <p className="text-sm md:text-base">
            Please note that the avatar and banner properties must be fully
            formed URLs that links to live and publicly accessible images.
          </p>
        </div>
        <div className="mt-8 flex  justify-center">
          <Button small={false}>Close</Button>
        </div>
      </div>
    </div>
  );
}
