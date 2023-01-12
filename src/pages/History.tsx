import dayjs from 'dayjs';
import { Layout } from '@/components';
import { useNotification } from '@/hooks';

export const History = (): JSX.Element => {
  const { history, historyIsLoading } = useNotification();

  return (
    <Layout>
      <div>
        <p className="text-3xl font-bold">History</p>
        <div className="border-gray-8 mt-4 mb-4 w-full flex-grow border-t"></div>
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
