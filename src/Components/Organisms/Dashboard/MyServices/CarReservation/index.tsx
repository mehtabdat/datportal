import { CustomEmpty, PageHeader } from "../../../../Atoms";
import Layout from "../../../../Templates/Layout";
import styles from "./styles.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Pagination, message } from "antd";
import { useFetchData } from "hooks";
import { CarReservationType } from "@modules/CarReservation/types";
import { CarReservationModule } from "@modules/CarReservation";
import { CarReservationModal } from "./create";
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";
import { CarReservationPermissionsEnum } from "@modules/CarReservation/permissions";
import { CarReservationDrawer } from "./CarReservationDrawer";
import { CarReservationCard } from "./card";
import { useDebounce } from "@helpers/useDebounce";
import { UserTypes } from "@modules/User/types";
import { UserModule } from "@modules/User";
import { CardShimmer } from "@atoms/CardShimmer";
import { getPermissionSlugs } from "@helpers/common";

const breadCrumbsData = [
  {
    text: "Home",
    isLink: true,
    path: "/",
  },
  {
    isLink: true,
    text: "My Services",
    path: "/myservices",
  },
  {
    isLink: false,
    text: "Car Reservation Request",
  },
];

const CarReservation = () => {
  // available permissions for the properties page
  const permissionSlug = getPermissionSlugs(CarReservationPermissionsEnum)
  const { userPermissions } = useSelector((state: RootState) => state.usersReducer);
  const permissions = userPermissions as { [key in CarReservationPermissionsEnum]: boolean };
  const { createcarReservationRequest } = permissions;

  const [currentEditType, setcurrentEditType] = useState<{
    recordId: number;
    openModal: boolean;
  }>({
    recordId: 0,
    openModal: false,
  });
  const [openDrawer, setOpenDrawer] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
    perPage: 6
  });

  const module = useMemo(() => new CarReservationModule(), []);

  const { data, onRefresh, setData, loading, meta } = useFetchData<CarReservationType[]>({
    method: module.getOwnRecords,
    initialQuery: { ...filters }
  });

  const onCancelClick = () => {
    if (createcarReservationRequest === false) {
      message.error("You don't have permission to create new record");
      return;
    }
    setcurrentEditType({
      ...currentEditType,
      openModal: !currentEditType.openModal
    });
  };

  //user search
  const [searchTermUser, setSearchTermUser] = useState("");
  const debouncedSearchTermUser = useDebounce(searchTermUser, 500);
  const [users, setUsers] = useState<UserTypes[]>([]);
  const userModule = useMemo(() => new UserModule(), []);
  const onUserSearch = useCallback(() => {
    if (debouncedSearchTermUser) {
      userModule.getAllRecords({ name: debouncedSearchTermUser }).then((res) => {

        setUsers((prev) => {
          // if the data is already present in the state, then don't add it again
          const filteredData = res?.data?.data?.filter((item: UserTypes) => {
            return !prev?.find((prevItem) => prevItem.id === item.id);
          });
          // add the new data to the existing data
          return [...prev, ...filteredData];
        })
      }).catch((err) => {
        message.error(err.response.data.message)
      })
    }
  }, [debouncedSearchTermUser])
  useEffect(() => {
    onUserSearch()
  }, [onUserSearch])

  return (
    <Layout permissionSlug={permissionSlug}>
      <PageHeader
        heading="Car Reservation Request"
        breadCrumbData={breadCrumbsData}
        showAdd={createcarReservationRequest === true ? true : false}
        buttonText="New Request"
        onButtonClick={onCancelClick}
      />
      <section className={styles.container}>
        {loading ? (
          [...new Array(6)].map((_, index) => <CardShimmer key={`shimmer${index}`} />)
        ) : (
          (data?.length !== 0) ? (
            data?.map((carReservation, index) => (
              <CarReservationCard
                key={index}
                carReservation={carReservation}
                onClick={() => {
                  setcurrentEditType({ ...currentEditType, recordId: carReservation.id });
                  setOpenDrawer(true);
                }}
              />
            ))
          ) : (
            <div style={{ margin: 'auto' }}>
              <CustomEmpty
                description="No requests found for the given filters"
              />
            </div>
          )
        )}
      </section>
      <Pagination
        hideOnSinglePage
        current={meta?.page}
        total={meta?.total}
        pageSize={meta?.perPage || 0}
        onChange={(page, pageSize) => {
          onRefresh({ ...filters, page: page, perPage: pageSize })
        }}
        style={{ alignSelf: "flex-end" }}
      />
      {openDrawer && <CarReservationDrawer
        openDrawer={openDrawer}
        onClose={() => setOpenDrawer(false)}
        permissions={permissions}
        record={currentEditType.recordId}
        reloadTableData={onRefresh}
      />}
      <CarReservationModal
        reloadTableData={onRefresh}
        onCancel={onCancelClick}
        openModal={currentEditType.openModal}
        permissions={permissions}
      />
    </Layout>
  );
};
export default CarReservation;