import React, { useState } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { HiOutlineWifi } from 'react-icons/hi';
import { LuParkingCircle } from 'react-icons/lu';
import { MdOutlinePets } from 'react-icons/md';
import { GiMeal } from 'react-icons/gi';
import { AnimatePresence, motion } from 'framer-motion';
import { Input } from '../CreateVenue/Input';
import { Button } from '../../Button';
import { Meta } from '../CreateVenue/Meta';
import { useUserContext } from '../../../context/userContext';
import { editVenue } from '../../../api/editVenue';
import { Error } from '../../Error';
import { Link, useNavigate } from 'react-router-dom';
import { Pending } from '../../Pending';
export const VenueEditor = ({ venue, setVenues, setEditToggle }) => {
  const { accessToken, apiKey } = useUserContext();
  const navigate = useNavigate();
  console.log(venue.id);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleImages, setToggleImages] = useState(false);
  const [name, setName] = useState(venue.name);

  const [description, setDescription] = useState(venue.description);

  // Media states
  const [media, setMedia] = useState(venue.media);
  const [image1, setImage1] = useState(venue.media[0] || { url: '', alt: '' });
  const [image2, setImage2] = useState(venue.media[1] || { url: '', alt: '' });
  const [image3, setImage3] = useState(venue.media[2] || { url: '', alt: '' });
  const [image4, setImage4] = useState(venue.media[3] || { url: '', alt: '' });
  const [image5, setImage5] = useState(venue.media[4] || { url: '', alt: '' });
  const [image6, setImage6] = useState(venue.media[5] || { url: '', alt: '' });
  const [price, setPrice] = useState(venue.price);
  const [maxGuests, setMaxGuests] = useState(venue.maxGuests);

  const [rating, setRating] = useState(venue.rating);

  const [meta, setMeta] = useState(venue.meta);

  const [location, setLocation] = useState(venue.location);

  const handleSubmit = e => {
    e.preventDefault();

    const images = [image1, image2, image3, image4, image5, image6];
    const filteredImages = images.filter(
      image => image.url !== '' && image.alt !== '',
    );
    const payload = {
      name,
      description,
      media: filteredImages,
      price,
      maxGuests,
      rating,
      meta,
      location,
    };
    setLoading(true);
    setError(false);
    editVenue(venue.id, accessToken, apiKey, payload)
      .then(res => {
        console.log('Response from editVenue:', res);
        setVenues(prevVenues => {
          return prevVenues.map(v => {
            if (v.id === venue.id) {
              // Merge existing venue data with the updated data
              return {
                ...v,
                ...res.data,
                bookings: v.bookings, // Keep the existing bookings array
              };
            }
            return v;
          });
        });
        navigate('/auth/dashboard');
        //setEditToggle(false);
      })
      .catch(error => {
        console.error('Error during venue edit:', error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const imageVariants = {
    initial: { scaleY: '0%' },
    show: { scaleY: '100%', originY: 0 },
    hide: { scaleY: '0%', originY: 0 },
  };

  if (error)
    return (
      <Error>
        <p className="mt-5">Failed to update venue</p>
        <p className="mt-2">Please try again later</p>
        <Link to={'/auth/profile'} className="mt-2 bg-brand p-2 text-white">
          Back to Profile Page
        </Link>
      </Error>
    );

  if (loading) return <Pending text={'Editing venue...'} />;
  return (
    <div className="mt-4 rounded-md border-2 border-rose-400 p-3">
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
                <p className="text-xs text-neutral-500">
                  Adding images increases the chance of getting your venue
                  booked.
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
                    isImage={true}
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
                    isImage={true}
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
                    isImage={true}
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
                    isImage={true}
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
                    isImage={true}
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
                    isImage={true}
                  />
                </div>
              </motion.div>
            )}
          </div>
          <div className="mt-3 border border-blue-300 xs:flex xs:gap-2">
            <Input
              label={'Price per night'}
              id={'price'}
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              required={true}
            />
            <Input
              label={'Max Guests'}
              id={'maxGuests'}
              type="number"
              min="0"
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
              min="0"
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
              Confirm
            </Button>
            <Button>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
