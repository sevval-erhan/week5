import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IsSkeleton from './IsSkeleton';

const InfoCard = ({
  character,
  handleFavoriteToggle,
  isFavorite,
  handleClick,
  loading,
}) => {
  return (
    <Card key={character.id} sx={{ width: '150px' }}>
      <IsSkeleton loading={loading} width={300} height={140}>
        <CardMedia
          component="img"
          alt="character"
          height="140"
          image={character.imageUrl}
        />
      </IsSkeleton>
      <CardContent>
        <IsSkeleton loading={loading} width="80%">
          <Typography variant="h5" component="div">
            {character.fullName}
          </Typography>
        </IsSkeleton>

        <IsSkeleton loading={loading} width="60%">
          <Typography variant="body2" color="text.secondary">
            {character.gender} {character.status}
          </Typography>
        </IsSkeleton>
      </CardContent>

      <CardActions>
        {isFavorite && (
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavoriteToggle(character.id)}
          >
            <IsSkeleton loading={loading} variant="circular" width={30}>
              <FavoriteIcon
                color={isFavorite(character.id) ? 'error' : 'disabled'}
              />
            </IsSkeleton>
          </IconButton>
        )}
        <Button
          size="small"
          variant="text"
          onClick={() => handleClick(character.id)}
        >
          <IsSkeleton loading={loading} width="100px">
            Learn More
          </IsSkeleton>
        </Button>
      </CardActions>
    </Card>
  );
};

InfoCard.propTypes = {
  character: PropTypes.object.isRequired,
  handleFavoriteToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.func,
  loading: PropTypes.bool,
};


export default InfoCard;