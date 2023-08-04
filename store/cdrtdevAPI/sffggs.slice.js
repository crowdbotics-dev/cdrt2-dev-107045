import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_sffgg_list = createAsyncThunk("sffggs/api_v1_sffgg_list", async payload => {
  const response = await apiService.api_v1_sffgg_list(payload);
  return response.data;
});
export const api_v1_sffgg_create = createAsyncThunk("sffggs/api_v1_sffgg_create", async payload => {
  const response = await apiService.api_v1_sffgg_create(payload);
  return response.data;
});
export const api_v1_sffgg_retrieve = createAsyncThunk("sffggs/api_v1_sffgg_retrieve", async payload => {
  const response = await apiService.api_v1_sffgg_retrieve(payload);
  return response.data;
});
export const api_v1_sffgg_update = createAsyncThunk("sffggs/api_v1_sffgg_update", async payload => {
  const response = await apiService.api_v1_sffgg_update(payload);
  return response.data;
});
export const api_v1_sffgg_partial_update = createAsyncThunk("sffggs/api_v1_sffgg_partial_update", async payload => {
  const response = await apiService.api_v1_sffgg_partial_update(payload);
  return response.data;
});
export const api_v1_sffgg_destroy = createAsyncThunk("sffggs/api_v1_sffgg_destroy", async payload => {
  const response = await apiService.api_v1_sffgg_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const sffggsSlice = createSlice({
  name: "sffggs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_sffgg_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sffgg_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sffgg_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sffgg_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sffgg_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sffgg_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_sffgg_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_sffgg_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_sffgg_list,
  api_v1_sffgg_create,
  api_v1_sffgg_retrieve,
  api_v1_sffgg_update,
  api_v1_sffgg_partial_update,
  api_v1_sffgg_destroy,
  slice: sffggsSlice
};