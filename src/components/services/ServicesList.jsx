
import { observer } from "mobx-react";
import { Button, Grid } from "@mui/material";
import dataStore from "../data/serviceStore";
import dataStoreAdmin from "../data/loginStore";
import loginStore from "../data/loginStore";
import Service from "./Service";
import { useEffect } from "react";
import { getServices } from '../data/serviceServer'
import AddService from "./AddService";

const ServiceList = observer(() => {
  const arrService = dataStore.ListService;
  useEffect(() => {
    if (!arrService.length) {
      getServices()
    }
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        {arrService.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Service oneService={item} />
          </Grid>
        ))}
        {dataStoreAdmin.isLogin && (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <AddService />
          </Grid>
        )}
      </Grid>
    </>
  );
});

export default ServiceList;
