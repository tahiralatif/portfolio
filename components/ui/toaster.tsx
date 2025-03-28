'use client';


import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

interface ToastType {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  [key: string]: any;
}

export function Toaster() {
  const { toasts }: { toasts: ToastType[] } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
function useToast(): { toasts: ToastType[]; } {
  throw new Error('Function not implemented.');
}

