import { useEffect, useState } from 'react';
import { Section } from '../generics/Section';
import ProfileEditor from './ProfileEditor';
import { AnimatePresence } from 'framer-motion';
import { Pending } from '../generics/Pending';
import { Error } from '../generics/Error';
import Banner from './Banner';
import EditProfile from './EditProfile';
import { User } from './User';
import { useUserContext } from '../../context/userContext';
import { useFetchUser } from '../../hooks/useFetchUser';

export default function ProfilePage() {
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const { userData, setUserData, pending, error, getUser } = useFetchUser();
  const { user, accessToken, apiKey } = useUserContext();

  useEffect(() => {
    getUser(user.name, accessToken, apiKey);
  }, [user]);

  if (pending) return <Pending text={'Loading user data'} />;
  if (error)
    return (
      <Error
        text={'Failed to load user data'}
        path={'/'}
        redirectTo={'Back to Home Page'}
      />
    );

  return (
    <>
      <Section ySpace={false} limWidth={true}>
        <Banner
          banner={userData?.banner}
          avatar={userData?.avatar}
          username={userData?.name}
          setToggleEditProfile={setToggleEditProfile}
        />
      </Section>
      <Section ySpace={false} limWidth={true}>
        <AnimatePresence>
          {toggleEditProfile && (
            <EditProfile>
              <ProfileEditor
                bio={userData?.bio}
                banner={userData?.banner}
                avatar={userData?.avatar}
                name={userData?.name}
                setToggleEditProfile={setToggleEditProfile}
                setUserData={setUserData}
              />
            </EditProfile>
          )}
        </AnimatePresence>
      </Section>
      {!toggleEditProfile && <User user={userData} />}
    </>
  );
}
