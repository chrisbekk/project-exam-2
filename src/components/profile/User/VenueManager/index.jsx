import { Register } from './Register';
import { Button } from '../../../generics/Button';
import { useNavigate } from 'react-router-dom';
export const VenueManager = ({ venueManager }) => {
  if (!venueManager) return <Register />;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/auth/dashboard');
  };
  return (
    <div className="mx-auto max-w-[560px]">
      <Button fill={true} handleClick={handleClick}>
        Manage Venues
      </Button>
    </div>
  );
};
