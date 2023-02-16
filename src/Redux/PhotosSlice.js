import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk('Photos/getPhotos', async (parameters) => {
  const photos = await fetch(
    `https://pixabay.com/api/?key=33467227-a3f0450de27fd480390de418c&category=${parameters.categoryCode}&page=1&per_page=50`,
  )
    .then((response) => response.json())
    .then((response) => response.hits);
  const photosApi = photos.map((photo) => {
    const photoInfo = {
      name: photo.tags ?? '',
      id: photo.id ?? '',
      previewWidth: photo.previewWidth ?? '',
      previewHeigth: photo.previewHeigth ?? '',
      webformatWidth: photo.webformatWidth ?? '',
      webformatHeigth: photo.webformatHeigth ?? '',
      imageWidth: photo.imageWidth ?? '',
      imageHeigth: photo.imageHeigth ?? '',
      imageSize: photo.imageSize ?? '',
      views: photo.views ?? '',
      downloads: photo.downloads ?? '',
      collections: photo.collections ?? '',
      likes: photo.likes ?? '',
      comments: photo.comments ?? '',
      userid: photo.userid ?? '',
      user: photo.user ?? '',
      type: photo.type ?? '',
      tags: photo.tags ?? '',
      pageURL: photo.pageURL ?? '',
      previewURL: photo.previewURL ?? '',
      webformatURL: photo.webformatURL ?? '',
      largeImageURL: photo.largeImageURL ?? '',
      userImageURL: photo.userImageURL ?? '',
    } ?? { name: 'Photo not available' };

    // No Image Available
    /*
    const seatMap = photo.hasOwnProperty('seatmap')
      ? photo.seatmap.staticUrl
      : 'https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/infadel171200119.jpg?ver=6';
    photoInfo.seat = seatMap;
    */

    return photoInfo;
  });
  return photosApi;
});

const initialState = { parameters: { categoryCode: '', page: 0, categoryName: '' }, data: [], photoId: null };

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    filterCategory(state, { payload }) {
      const newState = { ...state, parameters: payload };
      return newState;
    },
    photoId(state, { payload }) {
      const newState = {
        ...state,
        photoId: payload,
        photoInfo: state.data.filter((photo) => photo.id === (payload)),
      };
      return newState;
    },
    searchPhoto(state, { payload }) {
      const newState = {
        ...state,
        data: state.data.filter((photo) => photo.name.toLowerCase().indexOf(payload) > -1),
      };
      return newState;
    },
    setPhotos(state, { payload }) {
      const newState = { ...state, data: payload };
      return newState;
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(getPhotos.fulfilled, (state, action) => {
      const newState = { ...state, data: action.payload };
      return newState;
    });
  },
});

export default photosSlice.reducer;
export const {
  filterCategory, photoId, setPhotos, searchPhoto,
} = photosSlice.actions;
