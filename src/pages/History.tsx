import dayjs from 'dayjs';
import { Layout } from '@/components';
import { useNotification, useUser } from '@/hooks';

export const History = (): JSX.Element => {
  const { history, historyIsLoading } = useNotification();
  const { users } = useUser();

  return (
    <Layout>
      <div>
        <p className="text-3xl font-bold">History</p>
        <div className="border-gray-8 mt-4 mb-4 w-full flex-grow border-t"></div>

        {historyIsLoading && (
          <div className="absolute w-full rounded-md border border-blue-300 p-4 shadow">
            <div className="flex animate-pulse space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                </div>
                <div className="border-gray-8 mt-4 mb-4 w-full flex-grow border-t"></div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!historyIsLoading && (
          <div className="rounded-lg border border-gray-400 p-4">
            <div className="flex items-center justify-between font-semibold ">
              <p className="w-44 text-left">
                <label>Channel</label>
              </p>
              <p className="w-44 text-left">
                <label>Category</label>
              </p>
              <p className="w-44 text-left">
                <label>Message</label>
              </p>
              <p className="w-44 text-left">
                <label>Receiver</label>
              </p>
              <p className="w-44 text-left">
                <label>Created</label>
              </p>
            </div>
            <div className="border-gray-8 mt-4 mb-4 w-full flex-grow border-t"></div>

            {history
              ?.sort((currentNotification, previewNotification) =>
                dayjs(currentNotification.createdAt).isBefore(previewNotification.createdAt)
                  ? 1
                  : -1,
              )
              .map((notification) => (
                <div key={notification.id}>
                  <div className="flex items-center justify-between">
                    <p className="w-44 text-left">
                      <label>{notification.channel}</label>
                    </p>
                    <p className="w-44 text-left">
                      <label>{notification.category}</label>
                    </p>
                    <p className="w-44 text-left">
                      <label>{notification.message}</label>
                    </p>
                    <p className="w-44 text-left">
                      <label>{users?.find(({ id }) => id === notification.UserId)?.name}</label>
                    </p>
                    <p className="w-44 text-left">
                      <label>{dayjs(notification.createdAt).format('YYYY-MMM-DD HH:mm:ss')}</label>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default History;
