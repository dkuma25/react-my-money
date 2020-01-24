import axios from 'axios'
import apiURLs from '../consts'

const BASE_URL = apiURLs.API_URL

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}