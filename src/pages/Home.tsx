import { MdPlayArrow } from 'react-icons/md';
import { Layout } from '@/components';
import { useNotification } from '@/hooks';

const activeButtonState = 'bg-blue-400 text-white hover:bg-blue-500';
const inactiveButtonState = 'text-gray-500 hover:bg-gray-100';

export const Home = (): JSX.Element => {
  const {
    categories,
    channels,
    isLoading,
    setCategorySelected,
    categorySelected,
    setChannelSelected,
    channelSelected,
    sendMessage,
    errorMessage,
    message,
    setMessage,
  } = useNotification();

  return (
    <Layout>
      <div>
        <p className="text-3xl font-bold">Messages</p>
        <div className="border-gray-8 mt-4 mb-4 w-full flex-grow border-t"></div>

        <div>
          <div className="mt-4 mb-2 w-96">
            <div className="my-4">
              <div className="mb-2">
                <label className="text-xs font-medium text-gray-400">Select category</label>
              </div>
              <div className="flex space-x-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategorySelected(category)}
                    disabled={isLoading}
                    className={
                      'rounded-lg border border-gray-300 px-4 py-2 font-semibold capitalize ' +
                      (categorySelected === category ? activeButtonState : inactiveButtonState)
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-4">
              <div className="mb-2">
                <label className="text-xs font-medium text-gray-400">Select channel</label>
              </div>
              <div className="flex space-x-4">
                {channels.map((channel) => (
                  <button
                    key={channel}
                    onClick={() => setChannelSelected(channel)}
                    disabled={isLoading}
                    className={
                      'rounded-lg border border-gray-300 px-4 py-2 font-semibold capitalize ' +
                      (channelSelected === channel ? activeButtonState : inactiveButtonState)
                    }
                  >
                    {channel}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-4">
              <p>
                <label className="text-xs font-medium text-gray-400" htmlFor="txtMessage">
                  Message
                </label>
              </p>
              <div className="relative">
                <textarea
                  id="txtMessage"
                  className={
                    'w-full rounded-lg border border-gray-300 bg-gray-50 py-1 px-2 text-gray-600 outline-none hover:outline-none focus:outline-none ' +
                    (errorMessage ? 'border-red-500' : '')
                  }
                  disabled={isLoading}
                  value={message}
                  onChange={(e) => setMessage(e.target.value.trim())}
                  onKeyUpCapture={(e) => {
                    e.preventDefault();
                    e.key === 'Enter' && sendMessage();
                  }}
                />
                <button
                  onClick={() => sendMessage()}
                  className="absolute right-3 bottom-3 h-4 w-4 rounded-full outline-none"
                  disabled={isLoading}
                >
                  <MdPlayArrow className="text-gray-500" />
                </button>
              </div>
              <p className="text-red-500">{errorMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
