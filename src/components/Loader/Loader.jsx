import { Puff, ThreeDots } from 'react-loader-spinner';
import colors from 'utils/colorVeriables';
const Loader = ({ loader, size, needToCenter }) => {
  return (
    <>
      {loader === 'pruff' ? (
        <Puff
          height={size}
          width={size}
          radius={1}
          color={colors.btnHoverColor}
          ariaLabel="puff-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: needToCenter ? '100vh' : null,
          }}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <ThreeDots
          height={size}
          width={size}
          radius="9"
          color={colors.btnHoverColor}
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: needToCenter ? '100vh' : null,
          }}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
};

export default Loader;
