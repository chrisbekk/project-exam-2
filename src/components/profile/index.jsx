import { useEffect, useState } from 'react';
import { Section } from '../generics/Section';
import ProfileEditor from './ProfileEditor';
import { AnimatePresence } from 'framer-motion';

import Banner from './Banner';
import EditProfile from './EditProfile';
import { User } from './User';
import { useUserContext } from '../../context/userContext';

export default function ProfilePage() {
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  const { user } = useUserContext();
  console.log(user);
  return (
    <>
      <Section ySpace={false} limWidth={true}>
        <Banner
          banner={user?.banner}
          avatar={user?.avatar}
          username={user?.name}
          setToggleEditProfile={setToggleEditProfile}
        />
      </Section>
      <Section ySpace={false} limWidth={true}>
        <AnimatePresence>
          {toggleEditProfile && (
            <EditProfile>
              <ProfileEditor
                bio={user?.bio}
                banner={user?.banner}
                avatar={user?.avatar}
                name={user?.name}
                setToggleEditProfile={setToggleEditProfile}
              />
            </EditProfile>
          )}
        </AnimatePresence>
      </Section>
      {!toggleEditProfile && (
        <Section limWidth={true}>
          <User user={user} />
        </Section>
      )}
    </>
  );
}
