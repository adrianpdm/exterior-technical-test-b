import { IconCross, IconDiscountLinearGradient } from "../icons";

interface Coupon {
  coupon_id: string;
  coupon_code: string;
  coupon_type: string;
  coupon_discount: number;
  coupon_discount_type: string;
}

interface ModalProps {
  isOpen: boolean;
  itemList: Coupon[];
  activeCoupon?: string;
  onApply: (
    item: string,
    additionalValidity: boolean,
    couponCutoff: number
  ) => void;
  onClose: () => void;
}

function CouponList(props: ModalProps) {
  const { isOpen, itemList, activeCoupon, onApply, onClose } = props;

  async function reqCheckCoupon(data: string, couponCutoff: number) {
    const additionalValidity = false;
    onApply(data, additionalValidity, couponCutoff);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-monochrome-700 rounded-lg shadow-lg p-[1.5rem] lg:min-w-[24.5rem] lg:max-h-[30rem] overflow-y-auto">
            <div className="flex justify-between">
              <h1 className="modal-title text-[2rem] font-bold">
                Daftar Kupon
              </h1>
              <button className="" onClick={onClose}>
                <IconCross width={30} height={30} fill={"#A1A1A1"} />
              </button>
            </div>
            <hr className="text-monochrome-500 border-t-2 border-monochrome-600 my-[1rem]" />
            <div className="modal-body text-monochrome-100 font-normal overflow-y-scroll">
              <div className="flex flex-col justify-between">
                {itemList.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center space-x-[1rem] hover:bg-monochrome-500 px-[0.5rem] py-[1rem] rounded-lg"
                  >
                    <div className="flex flex-row items-center space-x-[1rem]">
                      <IconDiscountLinearGradient width={30} height={30} />
                      <p className="text-[0.875rem] font-normal leading-[1.5rem]">
                        {`[${item.coupon_code}] - ${item.coupon_type} - ${
                          item.coupon_discount
                        }${item.coupon_discount_type === "percentage" && "%"}`}
                      </p>
                    </div>
                    {item.coupon_code === activeCoupon ? (
                      <button
                        onClick={() => onApply("", false, 0)}
                        className="h-[2rem] w-[4.75rem] bg-monochrome-500 px-4 py-3 rounded-lg flex items-center z-10 justify-center hover:cursor-pointer hover:bg-monochrome-700"
                      >
                        <p className="text-[0.875rem] text-white font-bold leading-[1.5rem]">
                          Hapus
                        </p>
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          reqCheckCoupon(item.coupon_code, item.coupon_discount)
                        }
                        className="h-[2rem] w-[4.75rem] bg-allurared-600 px-4 py-3 rounded-lg flex items-center z-10 justify-center hover:cursor-pointer hover:bg-allurared-700"
                      >
                        <p className="text-[0.875rem] text-white font-bold leading-[1.5rem]">
                          Pakai
                        </p>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CouponList;
