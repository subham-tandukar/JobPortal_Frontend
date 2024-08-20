import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../Redux/jobLists/jobListSlice";
import { applyJob } from "../../Redux/jobLists/jobListApi";
import { RxCrossCircled } from "react-icons/rx";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { appliedList } from "../../Redux/Auth/authApi";

const Modal = ({ singleData, closeModal }) => {
  const { isLoading, error, success } = useSelector((state) => state.jobs);
  const { userDetail } = useSelector((state) => state.auth);
  const userInfo = userDetail && userDetail.Values;
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [cvFile, setCvFile] = useState("");
  const [CV, setCV] = useState(undefined);

  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);

  // useEffect(() => {
  //   if (CV) {
  //     handleFileUpload(CV);
  //   }
  // }, [CV]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);

    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setCvFile(downloadURL)
        );
      }
    );
  };

  const dataForm = {
    Name: userInfo && userInfo.Name,
    Email: userInfo && userInfo.Email,
    PhoneNumber: phoneNumber,
    CV: cvFile,
    JobID: singleData && singleData._id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", userInfo && userInfo.Name);
    formData.append("Email", userInfo && userInfo.Email);
    formData.append("PhoneNumber", phoneNumber);
    formData.append("JobID", singleData && singleData._id);
    if (CV) {
      formData.append("CV", CV);
    }
    dispatch(
      applyJob({ data: formData, token: currentUser && currentUser.Token })
    );
  };

  useEffect(() => {
    if (success) {
      setPhoneNumber("");
      setCV(undefined);
      toast.success("Applied successfully", {
        theme: "light",
      });

      closeModal();

      dispatch(clearError());

      dispatch(appliedList(currentUser && currentUser.Token));
    }
  }, [success]);

  return (
    <>
      <div className="modal-content">
        {currentUser ? (
          <>
            <h2 className="text-center text-lg font-semibold uppercase">
              Apply For this Job
            </h2>

            <form class="">
              <div class="mb-5">
                <label
                  htmlFor="name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[40px] p-4 py-1 disabled:bg-gray-200"
                  readOnly
                  disabled
                  value={userInfo && userInfo.Name}
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[40px] p-4 py-1 disabled:bg-gray-200"
                  readOnly
                  disabled
                  value={userInfo && userInfo.Email}
                />
              </div>
              <div class="mb-5">
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number <sup>*</sup>
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[40px] p-4 py-1"
                  required
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="cv"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Upload CV <sup>*</sup>
                </label>
                <input
                  type="file"
                  name="CV"
                  id="cv"
                  accept=".pdf"
                  onChange={(e) => setCV(e.target.files[0])}
                  class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-[#eee] file:text-black"
                />
              </div>

              {/* <div className="text-sm self-center mb-5">
                {fileUploadError ? (
                  <span className="form-response-message th-error">
                    Error Uploading pdf (PDF must be less than 2 mb)
                  </span>
                ) : filePerc > 0 && filePerc < 100 ? (
                  <div>
                    <div className="flex justify-between gap-3">
                      <p className="text-sm font-semibold">
                        Uploading: {CV.name}
                      </p>
                      <p className="text-sm font-semibold">{filePerc}%</p>
                    </div>
                    <div className="rounded-md mt-2 bg-[#e5e7eb]">
                      <div
                        style={{
                          width: `${filePerc}%`,
                          transition: "width 0.3s ease-in-out",
                        }}
                        className="progress-bar rounded-md h-[15px]"
                      ></div>
                    </div>
                  </div>
                ) : filePerc === 100 ? (
                  <span className="form-response-message th-success">
                    Pdf successfully uploaded!
                  </span>
                ) : (
                  ""
                )}
              </div> */}

              <button
                type="submit"
                // disabled={filePerc === 100 ? false : true}
                onClick={handleSubmit}
                className="btn disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none"
              >
                {isLoading ? "Please wait..." : "Submit"}
              </button>

              {error && (
                <span className="form-response-message th-error">
                  {" "}
                  {error.Message || "Something went wrong"}
                </span>
              )}
            </form>
          </>
        ) : (
          <>
            <h2 className="text-center text-lg font-semibold uppercase">
              Please Login to continue
            </h2>

            <div className="mt-10 text-center">
              <Link to="/login" className="btn ">
                Login
              </Link>
            </div>
          </>
        )}
        <button
          onClick={closeModal}
          className="text-2xl text-[#f00] absolute right-3 top-3"
        >
          <RxCrossCircled />
        </button>
      </div>
    </>
  );
};

export default Modal;
