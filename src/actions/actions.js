import * as types from './actionTypes';

//TEAM

export function createTeam(teamInfo) {
  return {
    type: types.CREATE_TEAM,
    payload: {
      request:{
        method:'post',
        url:'/team',
        data: teamInfo
      }
    }
  }
}

export function deleteTeam(_id) {
  console.log("deleting team", _id)
  return {
    type: types.DELETE_TEAM,
    payload: {
      request:{
        method:'delete',
        url:'/team/?_id=' + _id,
      }
    }
  }
}

export function getTeamInfo(path) {
  console.log("get team info for ", path)
  return {
    type: types.GET_TEAM_INFO,
    payload: {
      request:{
        method:'get',
        url:'/team/?path=' + path
      }
    }
  }
}

export function getFullTeamList() {
  return {
    type: types.GET_FULL_TEAM_LIST,
    payload: {
      request:{
        method:'get',
        url:'/teams',
      }
    }
  }
}


// search user by email auth0 /get_users_by_email endpoint,
// if user exists, then add object containing their email, user_id, and name to team
export function addUserToTeam(userEmail) {
  console.log("adding user ", userEmail)
  return {
    type: types.ADD_USER_TO_TEAM,
    payload: {
      request:{
        method:'get',
        url:'/team/?team_id=' + teamId
      }
    }
  }
}

//Collection

export function createCollection(collectionInfo) {
  return {
    type: types.CREATE_COLLECTION,
    payload: {
      request:{
        method:'post',
        url:'/collection',
        data: collectionInfo
      }
    }
  }
}

export function deleteCollection(id) {
  console.log("deleting collection", id)
  return {
    type: types.DELETE_COLLECTION,
    payload: {
      request:{
        method:'delete',
        url:'/collection/?_id=' + id
      }
    }
  }
}

export function updateCollection(collectionInfo) {
  return {
    type: types.UPDATE_COLLECTION,
    payload: {
      request:{
        method:'put',
        url:'/collection',
        data: collectionInfo
      }
    }
  }
}

export function fetchCollectionsByTeam(teamId) {
  return {
    type: types.FETCH_COLLECTIONS_BY_TEAM,
    payload: {
      request:{
        method:'get',
        url:'/collections/?team=' + teamId,
      }
    }
  }
}

export function fetchResources() {
  return {
    type: types.FETCH_RESOURCES,
    payload: {
      request:{
        method:'get',
        url:'/resources'
      }
    }
  }
}

export function fetchCollectionList() {
  return {
    type: types.FETCH_COLLECTION_LIST,
    payload: {
      request:{
        method:'get',
        url:'/collections'
      }
    }
  }
}

export function fetchCollection(collectionId) {
  return {
    type: types.FETCH_COLLECTION,
    payload: {
      request:{
        method:'get',
        url:'/collection?path=' + collectionId
      }
    }
  }
}



//subcollection

export function createSubcollection(subcollectionInfo) {
  return {
    type: types.CREATE_SUBCOLLECTION,
    payload: {
      request:{
        method:'post',
        url:'/subcollection',
        data: subcollectionInfo
      }
    }
  }
}

export function updateSubcollection(subcollectionInfo) {
  return {
    type: types.UPDATE_SUBCOLLECTION,
    payload: {
      request:{
        method:'put',
        url:'/subcollection',
        data: subcollectionInfo
      }
    }
  }
}

export function deleteSubcollection({id, parentId, parentType}) {
  console.log("deleting subcollection", id)
  return {
    type: types.DELETE_SUBCOLLECTION,
    payload: {
      request:{
        method:'delete',
        url:'/subcollection/?_id=' + id + "&parent_id=" + parentId + "&parent_type=" + parentType
      }
    }
  }
}


export function showAdminModal(props) {
  return {
    type: types.SHOW_ADMIN_MODAL,
    props
  }
}

export function hideAdminModal() {
  return {
    type: types.HIDE_ADMIN_MODAL
  }
}

export function setUserInfo(user) {
  return {
    type: types.SET_USER_INFO,
    user: user
  }
}