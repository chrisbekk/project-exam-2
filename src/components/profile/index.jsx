import { useEffect, useState } from 'react';
import { Section } from '../../components/Section';
import ProfileEditor from './ProfileEditor';
import { AnimatePresence } from 'framer-motion';
import { useAuthContext } from '../../context/authContext';

import Banner from './Banner';
import EditProfile from './EditProfile';
import { User } from './User';
export default function ProfilePage() {
  const [toggleEditProfile, setToggleEditProfile] = useState(false);

  const {
    user: { data },
    apiKey,
  } = useAuthContext();
  console.log(data);
  return (
    <>
      <Section ySpace={false} limWidth={true}>
        <Banner
          banner={data?.banner}
          avatar={data?.avatar}
          username={data?.name}
          setToggleEditProfile={setToggleEditProfile}
        />
      </Section>
      <Section ySpace={false} limWidth={true}>
        <AnimatePresence>
          {toggleEditProfile && (
            <EditProfile setToggleEditProfile={setToggleEditProfile}>
              <ProfileEditor
                bio={data?.bio}
                banner={data?.banner}
                avatar={data?.avatar}
                name={data?.name}
                setToggleEditProfile={setToggleEditProfile}
              />
            </EditProfile>
          )}
        </AnimatePresence>
      </Section>
      {!toggleEditProfile && (
        <Section limWidth={true}>
          <User userData={data} apiKey={apiKey?.key} />
        </Section>
      )}
    </>
  );
}
