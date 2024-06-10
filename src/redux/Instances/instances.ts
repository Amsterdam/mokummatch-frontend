import { IGeneral } from './../../commonInterfaces/instances';
import { IInstance, ISocialLinkData } from "@/commonInterfaces/instances";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import instancesData from "@/data/instances/instances.json";

import { RootState } from "../store";
import { IInstanceProfile } from "@/components/special/AlgorithmTop3/interfaces";

interface IInitialState {
  instances: IInstanceProfile[];
  socialLinks: ISocialLinkData[];
}

interface IGeneralName extends IInstanceProfile {
  general?: { name?: string; };
}

const initialState: IInitialState = {
  instances: instancesData,
  socialLinks: [],
};

export const InstancesSlice = createSlice({
  name: "instances",
  initialState,
  reducers: {
    getSocialLinks: (state) => {
      state.socialLinks = state.instances.map((instance: IGeneralName) => {
        const newData = {
          id: instance.id,
          name: instance.general?.name,
          socials: instance.socials,
        };
        return newData;
      });
    },
  },
});

export const { getSocialLinks } = InstancesSlice.actions;

export const getInstance = (state: RootState) => state.instances.instances;

export const getSocialLinksData = (state: RootState) => state.instances.socialLinks;

export default InstancesSlice.reducer;
