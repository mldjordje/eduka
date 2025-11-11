export default function Loading() {
  return (
    <>
      <div className="preloader">
        <div className="loading-container">
          <div className="loading" aria-hidden="true" />
          <div id="loading-icon">
            <img src="assets/img/logo/logo.png" alt="Лого удружења Едука" />
          </div>
        </div>
      </div>
    </>
  );
}
