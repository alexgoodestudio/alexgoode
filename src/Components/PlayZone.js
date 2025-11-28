import CircleM from './CircleM';
import Mission from './MR-Mission';
import Bubbles from './Bubbles';

function PlayZone() {
  return (
    <div className="py-lg-4 px-lg-5">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="text-slate-900 mb-2 alpino">Interactive Design Experiments</h1>
            <p className="text-slate-600"> A playground of Creativity for old and new projects to come.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Mission />
            <CircleM />
            <Bubbles/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayZone;
