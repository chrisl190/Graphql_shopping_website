import React, { ReactElement } from 'react';
import { Character, Maybe } from '../generated/graphql';
import {
  TableRow,
  TableCell,
  makeStyles,
  Theme,
  createStyles,
  Box,
  Typography,
} from '@material-ui/core';
import CharacterQuantity from './characterQuantity';

interface CharacterDataType {
  character: any;
}

export default function CharacterData({ character }: CharacterDataType): ReactElement {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.nameTableCell}>
        <Box>
          <img src={character?.image!} alt='' className={classes.characterImg} />
        </Box>
        <Typography variant='body2' className={classes.characterName}>
          {character?.name}
        </Typography>
      </TableCell>
      <TableCell>{character?.species}</TableCell>
      <TableCell>{character?.origin?.name}</TableCell>
      <TableCell>{character?.location?.name}</TableCell>
      <TableCell>{'£' + character?.unitPrice}</TableCell>
      <TableCell>
        <CharacterQuantity
          characterId={character?.id!}
          chosenQuantity={character?.chosenQuantity!}
        />
      </TableCell>
    </TableRow>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nameTableCell: {
      display: 'flex',
      alignItems: 'center',
    },
    characterImg: {
      maxHeight: '3rem',
      width: 'auto',
      borderRadius: '50%',
    },
    characterName: {
      paddingLeft: theme.spacing(2),
    },
  })
);
