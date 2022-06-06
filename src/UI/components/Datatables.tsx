import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import MockUpData from "../../MockUp/useraplications.json";
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {useDispatch} from "react-redux";
import PrintProvider, { Print, NoPrint } from 'react-easy-print';
import {getUserApplicationsByApplicationNumber,loadingRequest} from "../../State/newApp"
import { useHistory } from "react-router-dom";
import {ClearRequest} from "../../State/newApp"
import {RequestClear as RequestClearPersonalInfo} from "../../State/personalInfo"
import {RequestClear as RequestClearPassportInfo} from "../../State/passportInfo"
import {RequestClear as RequestClearattachmentDocuments} from "../../State/attachmentDocuments"

export interface TableBootStrapTablecolumn {

  text?: string,
  dataField?: string,
  formatter?: any
}
export interface columnsBootStrap {
  columns: TableBootStrapTablecolumn[],
  data:any

}
export type handleRowFunctions = {
  handlePopUp: (row: any) => void,
  EditRow: (row: any) => void,
  EditRowAdmin:(row:any) => void,
  SubmitRow:(row:any)=>void,
  RejectRow:(row:any)=>void,
  ReturnRow:(row:any)=>void

}
export const TableBootStrap = forwardRef<handleRowFunctions, columnsBootStrap>(({columns,data}, ref) => {
  const [show, setShow] = useState(true);
  const [SelectedObject, setSelectedObject] = useState<any>(null);
   data = React.useMemo<any>(() => data, [])
   const dispatch =useDispatch();
  const history = useHistory();

  //const dataapi= React.useMemo<any>(() => data1, [])
  console.log(data);
  //console.log(dataapi);
  useImperativeHandle(ref, () => ({
    handlePopUp(row: any) {
      console.log("handlePopUp", row);
      setShow(true);
      setSelectedObject(row);
    },
    EditRow(row: any) {
      dispatch(ClearRequest());
      dispatch(RequestClearPersonalInfo());
      dispatch(RequestClearPassportInfo());
      dispatch(RequestClearattachmentDocuments());
      dispatch(loadingRequest(true));
      dispatch(getUserApplicationsByApplicationNumber(row.applicationNumber));
      history.push("/newapp");
    },
    EditRowAdmin(row: any) {

      dispatch(loadingRequest(true));
      dispatch(getUserApplicationsByApplicationNumber(row.applicationNumber));
      history.push("/admin/newApp");
    },
    SubmitRow(row: any) {

     
      history.push("/admin/newApp");
    },
    RejectRow(row: any) {

      dispatch(loadingRequest(true));
      dispatch(getUserApplicationsByApplicationNumber(row.applicationNumber));
      history.push("/admin/newApp");
    },
    ReturnRow(row: any) {

      dispatch(loadingRequest(true));
      dispatch(getUserApplicationsByApplicationNumber(row.applicationNumber));
      history.push("/admin/newApp");
    }

  }));
  const PopUp = (row: any) => {
    //console.log("popup", row);
    const handelClose = () => {
      setShow(false);
      setSelectedObject(null);
    }

    const printContent = () => {
      window.print();
    };
    return (

      <Modal
        show={show}
        onHide={() => handelClose()}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton className="headertablecells">
          <Modal.Title  >
            <NoPrint>   عرض الطلب</NoPrint>
            <Print printOnly name="date">
              <> تاريخ الطباعة {new Date().toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</>
            </Print>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Print name="ss">

            <div className="p-5">
              <div className="user">
                {/* ################### form- row-001 #################*/}
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">رقم المعاملة</label>
                  <div className="col-sm-6">
                    <span>{row.row.applicationNumber}</span>
                  </div>
                </div>
                {/* ################### form- row-002 #################*/}
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">نوع المعاملة</label>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <span>{row.row.applicationTypeName}</span>
                    </div>
                  </div>
                </div>
                {/* ################### form- row-003 #################*/}
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">تاريخ المعاملة</label>
                  <div className="col-sm-6">
                    <span>{new Date(row.row.applicationDate).toLocaleDateString('ar-EG-u-nu-latn', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
                {/* ################### form- row-004 #################*/}
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">حالة المعاملة</label>
                  <div className="col-sm-6">
                    <span>{row.row.applicationStatusName}</span>
                  </div>
                </div>
                {/* ################### form- row-005 #################*/}
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">ملاحظات</label>
                  <div className="col-sm-6">
                    <span>{row.row.remark}</span>
                  </div>
                </div>
                {!row.row.isActive &&
                  <div className="row justify-content-center">
                    <button type="submit" className="btn btn-primary btn-user shorooq">تعديل الطلب</button>
                  </div>
                }
              </div>
            </div>
            <NoPrint>
              <button className="btn btn-primary btn-sm  " onClick={printContent} id="print">طباعة</button>
            </NoPrint>
          </Print>

        </Modal.Body>

      </Modal>

    );
  }
  const sizePerPageOptionRenderer = ({
    text,
    page,
    onSizePerPageChange
  }: any) => (
    <li
      key={text}
      role="presentation"
      className="dropdown-item"
    >
      <a
        href="#"
        tabIndex={-1}
        role="menuitem"
        data-page={page}
        onMouseDown={(e) => {
          e.preventDefault();
          onSizePerPageChange(page);
        }}
        style={{ color: 'red' }}
      >
        {text}
      </a>
    </li>
  );
  const options = {
    sizePerPageOptionRenderer
  };
  // Render the UI for your table
  return (<>

    <main className="login-bg">
      <div className="container-fluid" style={{ marginBottom: 10 }}>
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="card o-hidden border-1 shadow my-5 animate__animated animate__fadeIn " style={{ border: '1px solid rgb(189, 189, 189)' }}>
              <div className="card-header bg-dark">
                <div className="text-center">
                  <h1 className=" text-gray-900 mb-1 shorooq gold" style={{ fontSize: 28 }}> متابعة الطلب</h1>
                </div>
              </div>
              <div className="card-body p-5 ">
                <div className="table-responsive">
                  <BootstrapTable
                    classes="table table-striped  table-bordered naskh"
                    headerClasses="headertablecells"
                    rowClasses="rowtablecells"
                    keyField="id"
                    data={data}
                    columns={columns as any}
                    pagination={paginationFactory(options)} />
                </div>
                {console.log(SelectedObject)}
                {SelectedObject != null ? <PopUp row={SelectedObject} ></PopUp> : null}

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


  </>
  )
}
);
export interface TableReactTablecolumn {

  name: string,
  selector?: string,
  sortable?: boolean,
  cell?: any
}
export interface columns {
  columns: TableReactTablecolumn[]
}

export function TableReactTable(columns: columns) {
  const [show, setShow] = useState(true);
  const [SelectedObject, setSelectedObject] = useState(null);
  const data = React.useMemo<any>(() => MockUpData, [])
  function handlePopUp(row: any) {
    console.log("handlePopUp", row);
    setShow(true);
    setSelectedObject(row);
  }
  const PopUp = (row: any) => {
    console.log("popup", row);
    const handelClose = () => {
      setShow(false);
      setSelectedObject(null);
    }
    return (
      <Modal
        show={show}
        onHide={() => handelClose()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
                </Modal.Title>

        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
      </Modal>
    );
  }
  // Render the UI for your table
  return (<>
    <DataTable title=""
      columns={columns.columns}
      data={data}
      noHeader
      defaultSortField="applicationNumber"
      defaultSortAsc={false}
      pagination
      direction="rtl"
      highlightOnHover
      className="datatable"
    ></DataTable>
    {console.log(SelectedObject)}
    {SelectedObject != null ? <PopUp row={SelectedObject} ></PopUp> : null}
  </>
  )
}

