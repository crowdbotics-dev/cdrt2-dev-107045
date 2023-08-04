import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_cvdh_list = createAsyncThunk("cvdhs/api_v1_cvdh_list", async payload => {
  const response = await apiService.api_v1_cvdh_list(payload);
  return response.data;
});
export const api_v1_cvdh_create = createAsyncThunk("cvdhs/api_v1_cvdh_create", async payload => {
  const response = await apiService.api_v1_cvdh_create(payload);
  return response.data;
});
export const api_v1_cvdh_retrieve = createAsyncThunk("cvdhs/api_v1_cvdh_retrieve", async payload => {
  const response = await apiService.api_v1_cvdh_retrieve(payload);
  return response.data;
});
export const api_v1_cvdh_update = createAsyncThunk("cvdhs/api_v1_cvdh_update", async payload => {
  const response = await apiService.api_v1_cvdh_update(payload);
  return response.data;
});
export const api_v1_cvdh_partial_update = createAsyncThunk("cvdhs/api_v1_cvdh_partial_update", async payload => {
  const response = await apiService.api_v1_cvdh_partial_update(payload);
  return response.data;
});
export const api_v1_cvdh_destroy = createAsyncThunk("cvdhs/api_v1_cvdh_destroy", async payload => {
  const response = await apiService.api_v1_cvdh_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const cvdhsSlice = createSlice({
  name: "cvdhs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(api_v1_cvdh_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_cvdh_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_cvdh_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_cvdh_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_cvdh_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_cvdh_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_destroy.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(api_v1_cvdh_destroy.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(api_v1_cvdh_destroy.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  api_v1_cvdh_list,
  api_v1_cvdh_create,
  api_v1_cvdh_retrieve,
  api_v1_cvdh_update,
  api_v1_cvdh_partial_update,
  api_v1_cvdh_destroy,
  slice: cvdhsSlice
};