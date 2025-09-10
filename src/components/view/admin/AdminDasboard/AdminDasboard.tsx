// src/components/view/AdminPage/AdminDashboard.jsx

import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
  Image as ImageIcon,
  Star,
  AreaChart,
  LayoutPanelLeft,
  MessageSquareQuote,
  Info,
} from "lucide-react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"; // Pastikan path ini sesuai dengan proyek Anda

// --- DATA CONTOH UNTUK TABEL PENGGUNA ---
const data = [
  {
    id: "m5gr84i9",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "active",
  },
  {
    id: "3u1reuv4",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "derv1ws0",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    role: "Viewer",
    status: "inactive",
  },
  {
    id: "5kma53ae",
    name: "Emily Davis",
    email: "emily.d@example.com",
    role: "Editor",
    status: "active",
  },
  {
    id: "bhqecj4p",
    name: "Chris Lee",
    email: "chris.lee@example.com",
    role: "Viewer",
    status: "active",
  },
];

// --- DEFINISI KOLOM UNTUK TABEL PENGGUNA ---
const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.getValue("status") === "active" ? "outline" : "secondary"}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit User</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// --- KOMPONEN UTAMA DASHBOARD ---
export function AdminDashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);

  // State untuk tabel
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  // Data untuk menu sidebar
  const sidebarMenus = [
    { name: "Users", icon: Users2, href: "#" },
    { name: "Hero Section", icon: ImageIcon, href: "#" },
    { name: "Statistic", icon: AreaChart, href: "#" },
    { name: "About Us", icon: Info, href: "#" },
    { name: "Keunggulan", icon: Star, href: "#" },
    { name: "Product Category", icon: Package, href: "#" },
    { name: "Portfolio", icon: LayoutPanelLeft, href: "#" },
    { name: "CTA Section", icon: MessageSquareQuote, href: "#" },
    { name: "Footer Info", icon: Settings, href: "#" },
  ];

  return (
    <TooltipProvider>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-screen w-full rounded-lg border"
      >
        <ResizablePanel
          defaultSize={20}
          minSize={5}
          maxSize={25}
          collapsible={true}
          collapsedSize={4}
          onCollapse={() => setIsSidebarCollapsed(true)}
          onExpand={() => setIsSidebarCollapsed(false)}
          className={cn(
            "min-w-[50px] transition-all duration-300 ease-in-out",
            isSidebarCollapsed && "min-w-[70px]"
          )}
        >
          <div className="flex h-full flex-col p-2">
            <div className="flex h-[60px] items-center justify-center border-b px-4">
              <a href="#" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className={cn(isSidebarCollapsed && "hidden")}>
                  Admin Panel
                </span>
              </a>
            </div>
            <nav className="flex flex-col gap-1 py-4">
              {sidebarMenus.map((menu, index) => (
                <Tooltip key={index} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={index === 0 ? "secondary" : "ghost"}
                      className="justify-start gap-3"
                    >
                      <menu.icon className="h-5 w-5" />
                      <span
                        className={cn(
                          "truncate",
                          isSidebarCollapsed && "hidden"
                        )}
                      >
                        {menu.name}
                      </span>
                    </Button>
                  </TooltipTrigger>
                  {isSidebarCollapsed && (
                    <TooltipContent side="right">{menu.name}</TooltipContent>
                  )}
                </Tooltip>
              ))}
            </nav>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={80}>
          <div className="flex h-full flex-col">
            {/* Header Konten Utama */}
            <header className="flex h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
              <h1 className="text-xl font-semibold">Users</h1>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  value={table.getColumn("name")?.getFilterValue() ?? ""}
                  onChange={(event) =>
                    table.getColumn("name")?.setFilterValue(event.target.value)
                  }
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                />
              </div>
              <Button>Add User</Button>
            </header>

            {/* Konten Utama (Tabel) */}
            <main className="flex-1 overflow-auto p-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage all registered users in the system.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                          {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                            </TableHead>
                          ))}
                        </TableRow>
                      ))}
                    </TableHeader>
                    <TableBody>
                      {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                          <TableRow
                            key={row.id}
                            data-state={row.getIsSelected() && "selected"}
                          >
                            {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={columns.length}
                            className="h-24 text-center"
                          >
                            No results.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  {/* Pagination */}
                  <div className="flex items-center justify-end space-x-2 py-4 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </main>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}

export default AdminDashboard;
