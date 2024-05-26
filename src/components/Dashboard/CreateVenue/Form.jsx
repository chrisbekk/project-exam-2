import React, { useState } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { HiOutlineWifi } from 'react-icons/hi';
import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlinePets } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';
import { Input } from './Input';
import { Button } from '../../generics/Button';
import { Meta } from './Meta';
import { useUserContext } from '../../../context/userContext';
import { createVenue } from '../../../api/createVenue';
import { Error } from '../../generics/Error';
import { Link, useNavigate } from 'react-router-dom';
import { Pending } from '../../generics/Pending';
export const Form = ({ toggleForm, setToggleForm, setVenues }) => {
  const { accessToken, apiKey } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleImages, setToggleImages] = useState(false);

  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  // Media states
  const [media, setMedia] = useState([]);
  const [image1, setImage1] = useState({ url: '', alt: '' });
  const [image2, setImage2] = useState({ url: '', alt: '' });
  const [image3, setImage3] = useState({ url: '', alt: '' });
  const [image4, setImage4] = useState({ url: '', alt: '' });
  const [image5, setImage5] = useState({ url: '', alt: '' });
  const [image6, setImage6] = useState({ url: '', alt: '' });
  const [price, setPrice] = useState(1);
  const [maxGuests, setMaxGuests] = useState(1);

  const [rating, setRating] = useState(1);

  const [meta, setMeta] = useState({
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const [location, setLocation] = useState({
    address: '',
    city: '',
    zip: '',
    country: '',
    continent: '',
    lat: 0,
    lng: 0,
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(image1);
    const images = [image1, image2, image3, image4, image5, image6];
    const filteredImages = images.filter(image => image.url !== '');
    setMedia(filteredImages);
    const payload = {
      name,
      description,
      media,
      price,
      maxGuests,
      rating,
      meta,
      location,
    };

    console.log(payload);
    setLoading(true);
    setError(false);
    createVenue(accessToken, apiKey, payload)
      .then(res => {
        console.log('Response from createVenue:', res);
        setVenues(prevVenues => [...prevVenues, res.data]);
        setToggleForm(false);
        handleClose();
        navigate('/auth/dashboard');
      })
      .catch(error => {
        console.error('Error during venue creation:', error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    setImage1({ url: '', alt: '' });
    setImage2({ url: '', alt: '' });
    setImage3({ url: '', alt: '' });
    setImage4({ url: '', alt: '' });
    setImage5({ url: '', alt: '' });
    setImage6({ url: '', alt: '' });
    setPrice(1);
    setMaxGuests(1);
    setRating(1);
    setMeta({
      wifi: false,
      parking: false,
      breakfast: false,
      pets: false,
    });
    setLocation({
      address: '',
      city: '',
      zip: '',
      country: '',
      continent: '',
      lat: 0,
      lng: 0,
    });
    setToggleForm(false);
  };

  const variants = {
    initial: { scaleY: '0%' },
    show: { scaleY: '100%', originY: 0 },
    hide: { scaleY: '0%', originY: 0 },
  };

  const imageVariants = {
    initial: { scaleY: '0%' },
    show: { scaleY: '100%', originY: 0 },
    hide: { scaleY: '0%', originY: 0 },
  };

  if (error)
    return (
      <Error
        text={'Failed to create venue'}
        path={'/auth/profile'}
        redirectTo={'Back to Dashboard'}
      />
    );

  if (loading) return <Pending text={'Creating venue...'} />;
  return (
    <AnimatePresence>
      {toggleForm && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="show"
          exit="hide"
          className="mt-4 rounded-md border-2 border-rose-400 p-3"
        >
          <div>
            <h1 className="text-xl font-semibold">New Venue</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <Input
                label={'Name'}
                id={'name'}
                value={name}
                onChange={e => setName(e.target.value)}
                required={true}
              />
              <Input
                label={'Description'}
                id={'description'}
                value={description}
                onChange={e => setDescription(e.target.value)}
                required={true}
              />
              <div className=" rounded-lg border border-rose-400 p-1 xs:p-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">Images</h2>
                    <p className="text-sm text-neutral-500">
                      Adding images increases the chance of getting your venue
                      booked.
                    </p>
                    <p className="my-2 text-xs font-semibold text-red-600">
                      Both URL and alt text must be available before posting
                      venue
                    </p>
                  </div>
                  <div className="w-full max-w-[340px]">
                    <Button
                      fill={true}
                      handleClick={() => setToggleImages(prev => !prev)}
                    >
                      {toggleImages ? (
                        'Close'
                      ) : (
                        <div className="flex items-center justify-center gap-4">
                          <MdLibraryAdd className="size-5" /> Add
                        </div>
                      )}
                    </Button>
                  </div>
                </div>

                {toggleImages && (
                  <motion.div
                    variants={imageVariants}
                    initial="initial"
                    animate="show"
                    exit="hide"
                    className="md:grid md:grid-cols-2 md:gap-4"
                  >
                    <div className="mt-2 rounded-md border border-neutral-300 p-1">
                      <h3 className="font-semibold">Image 1</h3>
                      <Input
                        label={'URL'}
                        id={'image1URL'}
                        value={image1.url}
                        onChange={e =>
                          setImage1(prev => ({ ...prev, url: e.target.value }))
                        }
                        isImage={true}
                      />
                      <Input
                        label={'Alt text'}
                        id={'image1ALT'}
                        value={image1.alt}
                        maxLength="120"
                        onChange={e =>
                          setImage1(prev => ({ ...prev, alt: e.target.value }))
                        }
                      />
                    </div>
                    <div className="mt-2 rounded-md border border-neutral-300 p-1">
                      <h3 className="font-semibold">Image 2</h3>
                      <Input
                        label={'URL'}
                        id={'image2URL'}
                        value={image2.url}
                        onChange={e =>
                          setImage2(prev => ({ ...prev, url: e.target.value }))
                        }
                        isImage={true}
                      />
                      <Input
                        label={'Alt text'}
                        id={'image2ALT'}
                        value={image2.alt}
                        maxLength="120"
                        onChange={e =>
                          setImage2(prev => ({ ...prev, alt: e.target.value }))
                        }
                      />
                    </div>
                    <div className="mt-2 rounded-md border border-neutral-300 p-1">
                      <h3 className="font-semibold">Image 3</h3>
                      <Input
                        label={'URL'}
                        id={'image3URL'}
                        value={image3.url}
                        onChange={e =>
                          setImage3(prev => ({ ...prev, url: e.target.value }))
                        }
                        isImage={true}
                      />
                      <Input
                        label={'Alt text'}
                        id={'image3ALT'}
                        value={image3.alt}
                        maxLength="120"
                        onChange={e =>
                          setImage3(prev => ({ ...prev, alt: e.target.value }))
                        }
                      />
                    </div>
                    <div className="mt-2 rounded-md border border-neutral-300 p-1">
                      <h3 className="font-semibold">Image 4</h3>
                      <Input
                        label={'URL'}
                        id={'image4URL'}
                        value={image4.url}
                        onChange={e =>
                          setImage4(prev => ({ ...prev, url: e.target.value }))
                        }
                        isImage={true}
                      />
                      <Input
                        label={'Alt text'}
                        id={'image4ALT'}
                        value={image4.alt}
                        maxLength="120"
                        onChange={e =>
                          setImage4(prev => ({ ...prev, alt: e.target.value }))
                        }
                      />
                    </div>
                    <div className="mt-2 rounded-md border border-neutral-300 p-1">
                      <h3 className="font-semibold">Image 5</h3>
                      <Input
                        label={'URL'}
                        id={'image5URL'}
                        value={image5.url}
                        onChange={e =>
                          setImage5(prev => ({ ...prev, url: e.target.value }))
                        }
                        isImage={true}
                      />
                      <Input
                        label={'Alt text'}
                        id={'image5ALT'}
                        value={image5.alt}
                        maxLength="120"
                        onChange={e =>
                          setImage5(prev => ({ ...prev, alt: e.target.value }))
                        }
                      />
                    </div>
                    <div className="mt-2 rounded-md border border-neutral-300 p-1">
                      <h3 className="font-semibold">Image 6</h3>
                      <Input
                        label={'URL'}
                        id={'image6URL'}
                        value={image6.url}
                        onChange={e =>
                          setImage6(prev => ({ ...prev, url: e.target.value }))
                        }
                        isImage={true}
                      />
                      <Input
                        label={'Alt text'}
                        id={'image6ALT'}
                        value={image6.alt}
                        maxLength="120"
                        onChange={e =>
                          setImage6(prev => ({ ...prev, alt: e.target.value }))
                        }
                      />
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="mt-3 border border-blue-300 xs:flex xs:gap-2">
                <Input
                  label={'Price per night'}
                  id={'price'}
                  type="number"
                  min="1"
                  max="10000"
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                  required={true}
                />
                <Input
                  label={'Max Guests'}
                  id={'maxGuests'}
                  type="number"
                  min="1"
                  max="999"
                  value={maxGuests}
                  onChange={e => setMaxGuests(Number(e.target.value))}
                  required={true}
                />
              </div>
              <div className="mt-3 border border-green-500">
                <Input
                  label={'Rating'}
                  id={'rating'}
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={e => setRating(Number(e.target.value))}
                />
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold">Available Services</h2>
                <p className="text-xs text-neutral-500">
                  Select the services that your venue provides.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:flex sm:gap-2">
                  <Meta
                    toggle={meta.wifi}
                    handleClick={() =>
                      setMeta(prev => ({ ...prev, wifi: !prev.wifi }))
                    }
                  >
                    <HiOutlineWifi className="size-6" />
                    <p className="text-sm">Free Wifi</p>
                  </Meta>
                  <Meta
                    toggle={meta.parking}
                    handleClick={() =>
                      setMeta(prev => ({ ...prev, parking: !prev.parking }))
                    }
                  >
                    <LuParkingCircle className="size-6" />
                    <p className="text-sm">Parking Available</p>
                  </Meta>
                  <Meta
                    toggle={meta.breakfast}
                    handleClick={() =>
                      setMeta(prev => ({ ...prev, breakfast: !prev.breakfast }))
                    }
                  >
                    <GiMeal className="size-6" />
                    <p className="text-sm">Breakfast Included</p>
                  </Meta>
                  <Meta
                    toggle={meta.pets}
                    handleClick={() =>
                      setMeta(prev => ({ ...prev, pets: !prev.pets }))
                    }
                  >
                    <MdOutlinePets className="size-6" />
                    <p className="text-sm">Pets Allowed</p>
                  </Meta>
                </div>
              </div>
              <div className="mt-3 border border-orange-600 p-2">
                <h2 className="text-lg font-semibold">Location</h2>
                <Input
                  label={'Address'}
                  id={'address'}
                  value={location.address}
                  onChange={e =>
                    setLocation(prev => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                />
                <div className="mt-5 border-green-700 sm:flex sm:gap-2">
                  <Input
                    label={'City'}
                    id={'city'}
                    value={location.city}
                    onChange={e =>
                      setLocation(prev => ({ ...prev, city: e.target.value }))
                    }
                  />
                  <Input
                    label={'Zip Code'}
                    id={'zip'}
                    value={location.zip}
                    onChange={e =>
                      setLocation(prev => ({ ...prev, zip: e.target.value }))
                    }
                  />
                </div>
                <div className="border border-purple-400 sm:flex sm:gap-2">
                  <Input
                    label={'Country'}
                    id={'country'}
                    value={location.country}
                    onChange={e =>
                      setLocation(prev => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                  />
                  <Input
                    label={'Continent'}
                    id={'continent'}
                    value={location.continent}
                    onChange={e =>
                      setLocation(prev => ({
                        ...prev,
                        continent: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="border border-yellow-300 sm:flex sm:gap-2">
                  <Input
                    label={'Latitude'}
                    id={'lat'}
                    value={location.lat}
                    onChange={e =>
                      setLocation(prev => ({
                        ...prev,
                        lat: Number(e.target.value),
                      }))
                    }
                  />
                  <Input
                    label={'Longitude'}
                    id={'lng'}
                    value={location.lng}
                    onChange={e =>
                      setLocation(prev => ({
                        ...prev,
                        lng: Number(e.target.value),
                      }))
                    }
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-8 sm:flex-row">
                <Button fill={true} submit={true}>
                  Add Venue
                </Button>
                <Button handleClick={handleClose}>Cancel</Button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
