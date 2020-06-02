import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import Button from "#root/components/shared/Button";

const Incident = ({ incident }) => {
  return (
    <Tr>
      <Td>{incident._id}</Td>
      <Td>{incident.incidentDate}</Td>
      <Td>{incident.status.title}</Td>
      <Td>{incident.notificationCategory.title}</Td>
      <Td>{incident.notificationClassification.title}</Td>
      <Td>{incident.createdAt}</Td>
      <Td>{incident.updatedAt}</Td>
      <Td>{incident.printAt}</Td>
    </Tr>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.nord0};
  }
`;

const Th = styled.th`
  padding: 0.5rem 0.25rem;
`;

const Thead = styled.thead`
  border-bottom: 1px solid ${({ theme }) => theme.nord0};
`;

const Td = styled.td`
  padding: 0.5rem 0.25rem;
  text-align: center;
`;

const query = gql`
  {
    incidents {
      _id
      authorId
      createdAt
      incidentDate
      notificationCategory {
        title
      }
      notificationClassification {
        title
      }
      printAt
      status {
        title
      }
      updatedAt
    }
  }
`;

const Incidents = () => {
  const history = useHistory();
  const { data, loading } = useQuery(query);

  if (loading) return "Loading...";

  return (
    <>
      <Button style={{ marginLeft: 0 }} onClick={() => history.push("/new")}>
        Nuevo Incidente
      </Button>
      <Table>
        <Thead>
          <Tr>
            <Th>Nº</Th>
            <Th>Fecha del Incidente</Th>
            <Th>Estado</Th>
            <Th>Categoria</Th>
            <Th>Clasificación</Th>
            <Th>Fecha de Creación</Th>
            <Th>Fecha de Edición</Th>
            <Th>Fecha de Impresión</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.incidents.map(incident => (
            <Incident key={incident._id} incident={incident} />
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Incidents;
