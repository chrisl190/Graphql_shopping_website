import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { useGetCharactersQuery } from '../../generated/graphql';
import CharacterData from '../character-data/character-data';

export default function CharacterTable(): ReactElement {
  const { data, loading, error } = useGetCharactersQuery();

  if (loading) {
    return <CircularProgress />;
  } else if (error) {
    return (
      <Typography variant='h5'>
        Error retrieving data, please reload the page to try again.
      </Typography>
    );
  } else if (!data || !data.characters || !data.characters.results) {
    return (
      <Typography variant='h5'>No data available, please reload the page to try again.</Typography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Species</strong>
            </TableCell>
            <TableCell>
              <strong>Origin</strong>
            </TableCell>
            <TableCell>
              <strong>Location</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.characters.results.map(character => (
            <CharacterData character={character} key={character?.id!} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
