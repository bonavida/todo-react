import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const useToast = (toastId, text, conditions) => { 
  const [firstCondition] = conditions;
  useEffect(() => {
    firstCondition && toast(text, {
      toastId,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, conditions);
}