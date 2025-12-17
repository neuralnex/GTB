"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SignupData {
  Timestamp?: string
  Name?: string
  Username?: string
  'Phone Number'?: string
  'Email Address'?: string
  Address?: string
  City?: string
  State?: string
  Gender?: string
  Age?: string
  'Bank Name'?: string
  'Account Name'?: string
  'Account Number'?: string
}

export default function DataPage() {
  const [data, setData] = useState<SignupData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [count, setCount] = useState(0)
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch("/api/data")
      const result = await response.json()

      if (result.success) {
        setData(result.data || [])
        setCount(result.count || 0)
      } else {
        setError(result.message || "Failed to load data")
      }
    } catch (err) {
      setError("An error occurred while loading data")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    try {
      const date = new Date(dateString)
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return dateString
    }
  }

  const handleDelete = async (index: number) => {
    const row = data[index]
    const confirmMessage = `Are you sure you want to delete the signup for "${row.Name || 'Unknown'}"? This action cannot be undone.`
    
    if (!confirm(confirmMessage)) {
      return
    }

    try {
      setDeletingIndex(index)
      const response = await fetch(`/api/data?index=${index}`, {
        method: 'DELETE',
      })

      const result = await response.json()

      if (result.success) {
        // Remove the row from local state
        const newData = data.filter((_, i) => i !== index)
        setData(newData)
        setCount(result.count || newData.length)
      } else {
        alert(`Failed to delete: ${result.message || 'Unknown error'}`)
      }
    } catch (err) {
      console.error('Delete error:', err)
      alert('An error occurred while deleting the row')
    } finally {
      setDeletingIndex(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl font-bold">Signup Data</CardTitle>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">
                    Total: <strong className="text-foreground">{count}</strong> signups
                  </span>
                  <Button
                    onClick={fetchData}
                    disabled={loading}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {loading ? "Loading..." : "Refresh"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading data...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-400">{error}</p>
                  <Button onClick={fetchData} className="mt-4">
                    Try Again
                  </Button>
                </div>
              ) : data.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No signup data found.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-3 font-semibold text-sm">Timestamp</th>
                        <th className="text-left p-3 font-semibold text-sm">Name</th>
                        <th className="text-left p-3 font-semibold text-sm">Username</th>
                        <th className="text-left p-3 font-semibold text-sm">Phone</th>
                        <th className="text-left p-3 font-semibold text-sm">Email</th>
                        <th className="text-left p-3 font-semibold text-sm">City</th>
                        <th className="text-left p-3 font-semibold text-sm">State</th>
                        <th className="text-left p-3 font-semibold text-sm">Gender</th>
                        <th className="text-left p-3 font-semibold text-sm">Age</th>
                        <th className="text-left p-3 font-semibold text-sm">Bank</th>
                        <th className="text-left p-3 font-semibold text-sm">Account Name</th>
                        <th className="text-left p-3 font-semibold text-sm">Account Number</th>
                        <th className="text-left p-3 font-semibold text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr
                          key={index}
                          className="border-b border-border hover:bg-muted/30 transition-colors"
                        >
                          <td className="p-3 text-sm text-muted-foreground">
                            {formatDate(row.Timestamp)}
                          </td>
                          <td className="p-3 text-sm">{row.Name || "N/A"}</td>
                          <td className="p-3 text-sm">{row.Username || "N/A"}</td>
                          <td className="p-3 text-sm">{row["Phone Number"] || "N/A"}</td>
                          <td className="p-3 text-sm">{row["Email Address"] || "N/A"}</td>
                          <td className="p-3 text-sm">{row.City || "N/A"}</td>
                          <td className="p-3 text-sm">{row.State || "N/A"}</td>
                          <td className="p-3 text-sm capitalize">{row.Gender || "N/A"}</td>
                          <td className="p-3 text-sm">{row.Age || "N/A"}</td>
                          <td className="p-3 text-sm">{row["Bank Name"] || "N/A"}</td>
                          <td className="p-3 text-sm">{row["Account Name"] || "N/A"}</td>
                          <td className="p-3 text-sm font-mono text-xs">
                            {row["Account Number"] || "N/A"}
                          </td>
                          <td className="p-3 text-sm">
                            <Button
                              onClick={() => handleDelete(index)}
                              disabled={deletingIndex === index}
                              variant="destructive"
                              size="sm"
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              {deletingIndex === index ? "Deleting..." : "Delete"}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

