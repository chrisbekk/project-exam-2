import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Section } from '../../components/Section';
import Banner from './Banner';
export default function ProfilePage({ data }) {
  const [toggleEditProfile, setToggleEditProfile] = useState(false);
  console.log(data);
  return (
    <>
      <Section ySpace={false} limWidth={true}>
        <Banner
          banner={data?.banner}
          avatar={data?.avatar}
          username={data?.name}
        />
      </Section>
      <Section ySpace={false} limWidth={true}>
        userName
      </Section>
    </>
  );
}
