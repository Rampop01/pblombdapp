import Provider from "../../components/provider";

const Admin = () => {
  return (
    <Provider>
      <div className="bg-[#252525] text-white">
        <section className="md:mx-52 pt-20 mx-4 ">
          <h1 className="text-[#00ACE3] text-2xl text-center font-semibold">
            Admin Dashboard
          </h1>
          <div>
            <h3 className="mt-16 mb-2">Poll Title</h3>
            <div className=" justify-between grid grid-cols-3 md:gap-40 gap-8">
              <div className="col-span-2">
                <input
                  type="text"
                  name="pollTitle"
                  placeholder="Enter the poll title here"
                  className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md"
                />
              </div>
              <select
                id="country"
                name="country"
                className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md text-center"
              >
                <option>Country</option>
                <option value="ng">Nigeria</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
              </select>
            </div>
          </div>
          <div>
            <h3 className="mt-8 mb-2">Number of Participants</h3>
            <input
              type="text"
              name="numberOfParticipants"
              placeholder="Enter the number of participants"
              className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md"
            />
          </div>
          <div>
            <h3 className="mt-8 mb-2">Set Voting Date</h3>
            <div className=" justify-between grid grid-cols-3 md:gap-40 gap-20">
              <div>
                <input
                  type="date"
                  name="votingDate"
                  className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md"
                />
              </div>
              <input
                type="time"
                name="votingTime"
                className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md -ml-16"
              />
            </div>
          </div>
          <div>
            <h3 className="mt-8 mb-2">Set Voting Duration</h3>
            <div className=" justify-between grid md:grid-cols-4 md:gap-40 gap-20 grid-cols-3">
              <div>
                <input
                  type="number"
                  name="votingDurationDays"
                  placeholder="Days"
                  className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md"
                />
              </div>
              <input
                type="number"
                name="votingDurationHours"
                placeholder="Hours"
                className="bg-[#333333] p-2 w-full focus:border-[#00ACE3] focus:border-2 rounded-md -ml-16"
              />
            </div>
          </div>
          <h3 className="text-[#00ACE3] mt-8 font-semibold  text-xl mb-6"></h3>
          <div className="flex gap-6">
            <button className="left-btn text-3xl text-[#00ACE3]  md:w-[5%] md:-ml-20  md:mr-4 ">
              &lt;
            </button>
            <div className="flex justify-between md:w-[100%] mx-4 md:mx-0 gap-12">
              <div>
                <div>
                  <h3 className="mb-2">Name of Participants</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Participant name"
                    className="bg-[#333333] p-2 focus:border-[#00ACE3] focus:border-2 rounded-md"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="mb-2">Party Affiliation (if applicable)</h3>
                  <input
                    type="text"
                    name="partyAffiliation"
                    placeholder="Party affiliation"
                    className="bg-[#333333] p-2 focus:border-[#00ACE3] focus:border-2 rounded-md md:w-60"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-2">Upload Participant Images</h3>
                <div className="">
                  <div className="flex flex-col justify-center items-center bg-[#333333] md:px-12 md:py-6 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="size-8 mb-2 text-[#00ACE3]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <button className="bg-[#00ACE3] px-4 py-2 rounded-md font-semibold">
                      Browse
                    </button>
                    <p className="text-[#ACACAC]">or</p>
                    <p className="text-[#ACACAC]">drag and drop</p>
                  </div>
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/webp"
                    style={{ display: "none" }}
                    className="file"
                  />
                  <p className="text-[#ACACAC]"></p>
                  <small>Files Supported: png, jpg, jpeg, webp</small>
                </div>
              </div>
            </div>
            <button className="right-btn text-3xl text-[#00ACE3]  md:w-[5%] md:-mr-20 md:ml-4">
              &gt;
            </button>
          </div>
          <div className="flex justify-end mt-24 gap-4">
            <button className="bg-[#00ACE3] px-4 py-2 rounded-md font-semibold">
              Create Poll
            </button>
            <button className="bg-[#333333] px-4 py-2 rounded-md font-semibold">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </Provider>
  );
};

export default Admin;
