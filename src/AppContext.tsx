import React, { ReactNode, useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";

interface Image {
  id: number;
  video_id: number;
  order: number;
  text: string;
  get_image_url: string;
  get_next_shot_id: number;
  get_previous_shot_id: number;
  get_video_name: string;
}

interface ResultResponse {
  count: number;
  prev: string | null;
  next: string | null;
  results: Image[];
}

interface AppContextState {
  searchStr: string;
  results: ResultResponse;
  isLoading: boolean;
}

interface AppContextValue extends AppContextState {
  setSearchStr: (str: string) => void;
  loadNext: () => void;
}

const AppContext = React.createContext({} as AppContextValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppContextState>(DEFAULT_STATE);

  const setSearchStr = (str: string) => {
    setState((prev) => ({
      ...prev,
      searchStr: str,
      isLoading: str !== "",
    }));
  };

  const fetchImages = useMemo(
    () =>
      debounce((q: string) => {
        fetch(`https://jeetou.com/api/search/?q=${encodeURIComponent(q)}`)
          .then((r) => r.json())
          .then((results: ResultResponse) => {
            setState((prev) => ({
              ...prev,
              results,
              isLoading: false,
            }));
          });
      }, 1000),
    []
  );

  const loadNext = useMemo(
    () =>
      debounce(() => {
        if (state.results.next !== null) {
          fetch(state.results.next.replace(/^http:/, "https:"))
            .then((r) => r.json())
            .then((results: ResultResponse) => {
              setState((prev) => ({
                ...prev,
                results: {
                  ...prev.results,
                  next: results.next,
                  results: [...prev.results.results, ...results.results],
                },
              }));
            });
        }
      }, 500),
    [state.results.next]
  );

  useEffect(() => {
    if (state.searchStr) {
      fetchImages(state.searchStr);
    }
  }, [state.searchStr]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setSearchStr,
        loadNext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

const DEFAULT_STATE: AppContextState = {
  searchStr: "",
  results: {
    count: 0,
    next: null,
    prev: null,
    results: [],
  },
  isLoading: false,
};
