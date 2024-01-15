import React, { useState } from "react";

interface CardProps {
  filled: boolean;
  feedbackFilledData?: string;
  title: string;
  additionalTitle?: string;
  onSubmit(data: string): void;
}

const FeedbackInput: React.FC<CardProps> = ({
  filled = false,
  feedbackFilledData,
  title = "Meeting",
  additionalTitle,
  onSubmit,
}) => {
  const [isAllowSubmitFeedback, setIsAllowSubmitFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleFeedbackChange(event: any) {
    setIsAllowSubmitFeedback(true);
    setFeedback(event.target.value);
  }

  function submitFeedback() {
    return onSubmit(feedback);
  }

  return (
    <div className="rounded-lg border border-monochrome-500 bg-monochrome-600 p-[1rem] space-y-[1rem] h-[14.1875rem]">
      <div className="flex flex-row">
        <p className="text-[0.875rem] text-white font-bold leading-[1.5rem]">
          Feedback {title}
        </p>
        <p className="ml-[0.5rem] text-[0.875rem] text-white font-normal leading-[1.5rem]">
          {additionalTitle}
        </p>
      </div>
      <div className="w-full">
        {filled &&
        feedbackFilledData !== undefined &&
        feedbackFilledData?.length > 0 ? (
          feedbackFilledData
        ) : (
          <textarea
            className="h-[6.4375rem] w-full col-span-10 rounded-[0.5rem] bg-monochrome-600 border border-monochrome-300 text-white text-sm px-[1rem] py-[0.5rem] focus:border-monochrome-300 focus:ring-transparent hover:ring-allurared-500"
            placeholder="Tulis feedback..."
            onChange={handleFeedbackChange}
          />
        )}
      </div>
      <div className="flex justify-end w-full">
        {!filled && (
          <button
            onClick={() => submitFeedback()}
            className={`
                  h-[2rem] w-[9.875rem] rounded-lg font-bold ${
                    isAllowSubmitFeedback
                      ? "bg-allurared-600 hover:bg-allurared-700"
                      : "bg-monochrome-300 hover:cursor-default"
                  }
                  `}
          >
            <p className="text-[0.875rem] text-white font-bold leading-[1.5rem]">
              Simpan
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default FeedbackInput;
