import { useContext } from 'react';
import { DispatchContext } from '../contexts';


function useDispatch() {
	return useContext(DispatchContext);
}

export default useDispatch;